using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Activity // När vi skapar en new Activity retunerar vi ett objekt med dessa properties
    {
        public Guid Id { get; set; } // Guid kommer från System. "Id" är även primery key.
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
    }
}