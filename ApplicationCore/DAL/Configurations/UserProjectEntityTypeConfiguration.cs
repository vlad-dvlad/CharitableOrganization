using ApplicationCore.Entites;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.DAL.Configurations
{
    class UserProjectEntityTypeConfiguration : IEntityTypeConfiguration<UserProject>
    {
        public void Configure(EntityTypeBuilder<UserProject> builder)
        {
            //builder.HasMany(x => x.UserId).WithOne(y => y.Id);
        }
    }
}
