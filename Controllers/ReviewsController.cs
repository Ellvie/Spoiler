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
    public class ReviewsController : ControllerBase
    {
        private readonly SpoilerContext _context;
        private readonly ApplicationDbContext _userContext;

        public ReviewsController(SpoilerContext context, ApplicationDbContext userContext)
        {
            _context = context;
            _userContext = userContext;
        }

        // GET: api/Reviews
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Review>>> GetReview()
        {
            var review = await _context.Review.Include(f => f.Show).Include(f => f.Film).Include(f => f.User).ToListAsync();
            return review;
        }

        // GET: api/Reviews
        [HttpGet("GetThree")]
        public async Task<ActionResult<IEnumerable<Review>>> GetThree()
        {
            var review = await _context.Review.Include(f => f.Show).Include(f => f.Film).Include(f => f.User).OrderBy(f => f.Added).Take(3).ToListAsync();
            return review;
        }

        // GET: api/Reviews/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Review>> GetReview(int id)
        {
            var review = await _context.Review.FindAsync(id);

            if (review == null)
            {
                return NotFound();
            }

            return review;
        }

        // PUT: api/Reviews/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReview(int id, Review review)
        {
            if (id != review.ReviewId)
            {
                return BadRequest();
            }

            _context.Entry(review).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReviewExists(id))
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

        // POST: api/Reviews
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Review>> PostReview(Review review)
        {
            var newReviewEntry = new Review
            {
                ReviewContent = review.ReviewContent,
                ReviewTitle = review.ReviewTitle,
                Rating = review.Rating,
                User = _userContext.Users.Find(review.UserKey)
            };
            if (review.ShowKey is null)
            {
                newReviewEntry.Film = _context.Films.Find(review.FilmKey);
            }
            else
            {
                newReviewEntry.Show = _context.Shows.Find(review.ShowKey);
            }            
            _context.Review.Attach(newReviewEntry);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReview", new { id = newReviewEntry.ReviewId }, newReviewEntry);
        }

        // DELETE: api/Reviews/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReview(int id)
        {
            var review = await _context.Review.FindAsync(id);
            if (review == null)
            {
                return NotFound();
            }

            _context.Review.Remove(review);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReviewExists(int id)
        {
            return _context.Review.Any(e => e.ReviewId == id);
        }
    }
}
