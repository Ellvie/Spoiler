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
        public async Task<ActionResult<IEnumerable<ForumComment>>> GetComment(int forumId)
        {
            return await _context.ForumComment.Include(x => x.User).Where(x => x.Forum.ForumId == forumId).ToListAsync();
        }


        // PUT: api/Forum/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComment(int id, ForumComment forumComment)
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
                if (!CommentExists(id))
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
        public async Task<ActionResult<IEnumerable<ForumComment>>> PostComment(ForumComment forumComment)
        {
            var newForumComment = new ForumComment
            {
                Comment = forumComment.Comment,
                Forum = _context.Forum.Find(forumComment.CommentKey),
                User = _userContext.Users.Find(forumComment.UserKey)
            };

            _context.ForumComment.Attach(newForumComment);

            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CommentExists(int id)
        {
            return _context.ForumComment.Any(e => e.ForumCommentId == id);
        }
    }
}
