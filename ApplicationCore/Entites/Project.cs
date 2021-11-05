using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Entites
{
    public class Project : BaseEntity
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsAdmin { get; set; }

        public byte[] Pricture { get; set; }
    
    }
}
