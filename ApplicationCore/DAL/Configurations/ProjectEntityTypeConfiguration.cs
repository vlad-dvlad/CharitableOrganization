using ApplicationCore.Entites;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.DAL.Configurations
{
    class ProjectEntityTypeConfiguration : IEntityTypeConfiguration<Project>
    {
        public void Configure(EntityTypeBuilder<Project> builder)
        {
            builder.HasKey(x => x.Id);
            builder.HasMany(p => p.UserProjectMappings)
                .WithOne(upm => upm.Project)
                .HasForeignKey(upm => upm.ProjectId);
        }
    }
}
