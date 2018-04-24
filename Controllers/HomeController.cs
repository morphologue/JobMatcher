using Microsoft.AspNetCore.Mvc;

namespace JobMatcher.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
