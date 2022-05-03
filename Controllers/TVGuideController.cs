#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Spoiler.Data;
using Spoiler.Models;

namespace Spoiler.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TVGuideController : ControllerBase
    {
        private readonly SpoilerContext _context;

        public TVGuideController(SpoilerContext context)
        {
            _context = context;
        }

        // GET: api/TVGuide
        [HttpGet]
        public async Task<ActionResult<TVGuide>> GetTVGuide()
        {
            return new TVGuide { TVGuideId = 1, Content = "This is some TV-Guide content" };
            //return await _context.News.ToListAsync();
        }

        // GET: api/TVGuide/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TVGuide>> GetsTVGuideById(int id)
        {
            var tvGuide = await _context.TVGuide.FindAsync(id);

            if (tvGuide == null)
            {
                return NotFound();
            }

            return tvGuide;
        }



        private bool NewsExists(int id)
        {
            return _context.News.Any(e => e.NewsId == id);
        }
    }
}