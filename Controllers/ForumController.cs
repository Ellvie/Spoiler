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
    public class ForumController : ControllerBase
    {
        private readonly SpoilerContext _context;
        private readonly ApplicationDbContext _userContext;

        public ForumController(SpoilerContext context, ApplicationDbContext userContext)
        {
            _context = context;
            _userContext = userContext;
        }

        // GET: api/Forum
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Forum>>> GetForum()
        {
            var forum = await _context.Forum.Include(f => f.Show).Include(f => f.Film).Include(f => f.User).ToListAsync();
            return forum;
        }

        // GET: api/Forum
        [HttpGet("GetThree")]
        public async Task<ActionResult<IEnumerable<Forum>>> GetThree()
        {
            var forum = await _context.Forum.Include(f => f.Show).Include(f => f.Film).Include(f => f.User).OrderBy(f => f.Added).Take(3).ToListAsync();
            return forum;
        }

        // GET: api/Forum/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Forum>> GetForum(int id)
        {
            var forum = await _context.Forum.FindAsync(id);

            if (forum == null)
            {
                return NotFound();
            }

            return forum;
        }

        // PUT: api/Forum/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutForum(int id, Forum forum)
        {
            if (id != forum.ForumId)
            {
                return BadRequest();
            }

            _context.Entry(forum).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ForumExists(id))
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

        // POST: api/Forum
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Forum>> PostForum(Forum forum)
        {
            var newForumEntry = new Forum
            {
                ForumComment = forum.ForumComment,
                User = _userContext.Users.Find(forum.UserKey)
            };
            if (forum.ShowKey is null)
            {
                newForumEntry.Film = _context.Films.Find(forum.FilmKey);
            }
            else
            {
                newForumEntry.Show = _context.Shows.Find(forum.ShowKey);
            }            
            _context.Forum.Attach(newForumEntry);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetForum", new { id = newForumEntry.ForumId }, newForumEntry);
        }

        // DELETE: api/Forum/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteForum(int id)
        {
            var forum = await _context.Forum.FindAsync(id);
            if (forum == null)
            {
                return NotFound();
            }

            _context.Forum.Remove(forum);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ForumExists(int id)
        {
            return _context.Forum.Any(e => e.ForumId == id);
        }
    }
}
