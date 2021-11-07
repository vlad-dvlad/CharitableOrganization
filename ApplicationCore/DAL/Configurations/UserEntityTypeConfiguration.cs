using ApplicationCore.Entites;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.DAL.Configurations
{
    class UserEntityTypeConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(x => x.Id);

            builder.HasMany(u => u.UserProjectMappings)
                .WithOne(upm => upm.User)
                .HasForeignKey(upm => upm.UserId);

            var user = new User
            {
                Id = 1,
                FirstName = "Admin",
                LastName = "Admin",
                Username = "adminok",
                Email = "admkross@ua.com",
                PasswordHash = "AQAAAAEAACcQAAAAEDtnahEtJIBoW6g8CjXg1FGRD5lD5d2JfiRWMZSrY+fVMtonAA1WmUQiYkiKyKF5Cg==",
                RoleId = 2
            };

            builder.HasData(user);


        }
    }
}
