#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Spoiler.Data;
using Spoiler.Models;

namespace Spoiler.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecapsController : ControllerBase
    {
        private readonly SpoilerContext _context;
        private readonly ApplicationDbContext _userContext;

        public RecapsController(SpoilerContext context, ApplicationDbContext userContext)
        {
            _context = context;
            _userContext = userContext;
        }

        // GET: api/Recaps
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Recap>>> GetRecaps()
        {
            var recaps = await _context.Recap.Include(f => f.Show).Include(f => f.Film).Include(f => f.User).ToListAsync();
            return recaps;
        }

        // GET: api/Recaps
        [HttpGet("GetThree")]
        public async Task<ActionResult<IEnumerable<Recap>>> GetThree()
        {
            var recaps = await _context.Recap.Include(f => f.Show).Include(f => f.Film).Include(f => f.User).OrderBy(f => f.Added).Take(3).ToListAsync();
            return recaps;
        }

        // GET: api/Recaps/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Recap>> GetRecap(int id)
        {
            var recap = await _context.Recap.FindAsync(id);

            if (recap == null)
            {
                return NotFound();
            }

            return recap;
        }

        // PUT: api/Recaps/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecap(int id, Recap recap)
        {
            if (id != recap.RecapId)
            {
                return BadRequest();
            }

            _context.Entry(recap).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecapExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Recaps
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Forum>> PostRecap(Recap recap)
        {
            var newRecapEntry = new Recap
            {
                RecapContent = recap.RecapContent,
                RecapTitle = recap.RecapTitle,
                User = _userContext.Users.Find(recap.UserKey)
            };
            if (recap.ShowKey is null)
            {
                newRecapEntry.Film = _context.Films.Find(recap.FilmKey);
            }
            else
            {
                newRecapEntry.Show = _context.Shows.Find(recap.ShowKey);
            }
            _context.Recap.Attach(newRecapEntry);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecap", new { id = newRecapEntry.RecapId }, newRecapEntry);
        }

        // DELETE: api/Recaps/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecap(int id)
        {
            var recap = await _context.Recap.FindAsync(id);
            if (recap == null)
            {
                return NotFound();
            }

            _context.Recap.Remove(recap);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RecapExists(int id)
        {
            return _context.Recap.Any(e => e.RecapId == id);
        }
    }
}
