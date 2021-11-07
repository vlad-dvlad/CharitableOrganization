using Microsoft.EntityFrameworkCore.Migrations;

namespace ApplicationCore.Migrations
{
    public partial class addedAdmin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "FirstName", "LastName", "PasswordHash", "RoleId", "Username" },
                values: new object[] { 1, "admkross@ua.com", "Admin", "Admin", "AQAAAAEAACcQAAAAEDtnahEtJIBoW6g8CjXg1FGRD5lD5d2JfiRWMZSrY+fVMtonAA1WmUQiYkiKyKF5Cg==", 2, "adminok" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
