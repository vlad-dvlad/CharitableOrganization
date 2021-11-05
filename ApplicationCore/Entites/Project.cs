using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ApplicationCore.Entites
{
    public class Project : BaseEntity
    {

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsCompleted { get; set; }

        public byte[] Pricture { get; set; }
        public ICollection<UserProject> UserProjectMappings { get; set; }
    }
}
