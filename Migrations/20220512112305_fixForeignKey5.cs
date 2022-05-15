using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Spoiler.Migrations
{
    public partial class fixForeignKey5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FilmKey",
                table: "Forum");

            migrationBuilder.DropColumn(
                name: "ShowKey",
                table: "Forum");

            migrationBuilder.DropColumn(
                name: "UserKey",
                table: "Forum");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FilmKey",
                table: "Forum",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ShowKey",
                table: "Forum",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "UserKey",
                table: "Forum",
                type: "TEXT",
                nullable: true);
        }
    }
}
