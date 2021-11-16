using ApplicationCore.DAL;
using ApplicationCore.Entites;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace MainApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly AppDbContext _ctx;

        public ProjectsController(AppDbContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync(int pageSize = 6, int page = 1)
        {
            var projects = await _ctx.Projects.Skip(pageSize * (page - 1)).Take(pageSize).ToListAsync();

            var totalCount = _ctx.Projects.Count(); /*(from a in _ctx.Projects select a).Count();*/

            return Ok(new { projects, totalCount});
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByIdAsync(int id)
        {
            var project = await _ctx.Projects.FirstOrDefaultAsync(x => x.Id == id);

            if (project is null)
            {
                return NotFound();
            }

            return Ok(project);
        }

        [HttpPost("{id}/image")]
        public async Task<IActionResult> PostImage(int id, IFormCollection data, IFormFile imageFile)
        {
            var project = await _ctx.Projects.FirstOrDefaultAsync(x => x.Id == id);

            if (project is null)
            {
                return NotFound();
            }

            if (imageFile != null && imageFile.Length != 0)
            {
                using var ms = new MemoryStream();
                imageFile.CopyTo(ms);
                var imageData = ms.ToArray();
                project.Pricture = imageData;
                await _ctx.SaveChangesAsync();
                return Ok();
            }

            return BadRequest();
        }
    }
}
