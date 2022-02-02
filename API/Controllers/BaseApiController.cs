using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  [ApiController]
  [Route("api/[controller]")] // Plockar bort controller från namnmet och lägger på api/ i urlen. T ex ActivitiesController = api/activities
    public class BaseApiController : ControllerBase
    {
        
    }
}