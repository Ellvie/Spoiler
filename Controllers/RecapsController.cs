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

        public RecapsController(SpoilerContext context)
        {
            _context = context;
        }

        // GET: api/Recaps
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Recap>>> GetRecap()
        {
            return await _context.Recap.ToListAsync();
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
        public async Task<ActionResult<Recap>> PostRecap(Recap recap)
        {
            _context.Recap.Add(recap);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecap", new { id = recap.RecapId }, recap);
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
