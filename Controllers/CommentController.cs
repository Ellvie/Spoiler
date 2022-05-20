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
    public class CommentController : ControllerBase
    {
        private readonly SpoilerContext _context;
        private readonly ApplicationDbContext _userContext;

        public CommentController(SpoilerContext context, ApplicationDbContext userContext)
        {
            _context = context;
            _userContext = userContext;
        }

       // GET: api/Comment
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ForumComment>>> GetComments(int forumId)
        {
            var test = await _context.ForumComment.Include(x => x.User).Where(x => x.Forum.ForumId == forumId).ToListAsync();
            var user = await _userContext.Users.FindAsync(test.FirstOrDefault().User.Id);            
            return test;
        }


        // PUT: api/Forum/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutForum(int id, ForumComment forumComment)
        {
            if (id != forumComment.ForumCommentId)
            {
                return BadRequest();
            }

            _context.Entry(forumComment).State = EntityState.Modified;

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

        // POST: api/Comment
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Forum>> PostComment(ForumComment forumComment)
        {
            var newForumComment = new ForumComment
            {
                Comment = forumComment.Comment,
                User = forumComment.User
            };
            newForumComment.Forum = _context.Forum.Find(forumComment.CommentKey);
            _context.ForumComment.Add(newForumComment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetComments", new { id = newForumComment.ForumCommentId });
        }

        // DELETE: api/Comment/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteForum(int id)
        {
            var forum = await _context.ForumComment.FindAsync(id);
            if (forum == null)
            {
                return NotFound();
            }

            _context.ForumComment.Remove(forum);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ForumExists(int id)
        {
            return _context.ForumComment.Any(e => e.ForumCommentId == id);
        }
    }
}
