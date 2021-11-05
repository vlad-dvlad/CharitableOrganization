using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MainApi.Controllers
{
    public class ProjectController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

        
    }
}
