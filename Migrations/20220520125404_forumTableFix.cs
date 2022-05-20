using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Spoiler.Migrations
{
    public partial class forumTableFix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Forum_Films_FilmId1",
                table: "Forum");

            migrationBuilder.DropForeignKey(
                name: "FK_Forum_Shows_ShowId1",
                table: "Forum");

            migrationBuilder.RenameColumn(
                name: "ShowId1",
                table: "Forum",
                newName: "ShowId");

            migrationBuilder.RenameColumn(
                name: "FilmId1",
                table: "Forum",
                newName: "FilmId");

            migrationBuilder.RenameIndex(
                name: "IX_Forum_ShowId1",
                table: "Forum",
                newName: "IX_Forum_ShowId");

            migrationBuilder.RenameIndex(
                name: "IX_Forum_FilmId1",
                table: "Forum",
                newName: "IX_Forum_FilmId");

            migrationBuilder.AddForeignKey(
                name: "FK_Forum_Films_FilmId",
                table: "Forum",
                column: "FilmId",
                principalTable: "Films",
                principalColumn: "FilmId");

            migrationBuilder.AddForeignKey(
                name: "FK_Forum_Shows_ShowId",
                table: "Forum",
                column: "ShowId",
                principalTable: "Shows",
                principalColumn: "ShowId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Forum_Films_FilmId",
                table: "Forum");

            migrationBuilder.DropForeignKey(
                name: "FK_Forum_Shows_ShowId",
                table: "Forum");

            migrationBuilder.RenameColumn(
                name: "ShowId",
                table: "Forum",
                newName: "ShowId1");

            migrationBuilder.RenameColumn(
                name: "FilmId",
                table: "Forum",
                newName: "FilmId1");

            migrationBuilder.RenameIndex(
                name: "IX_Forum_ShowId",
                table: "Forum",
                newName: "IX_Forum_ShowId1");

            migrationBuilder.RenameIndex(
                name: "IX_Forum_FilmId",
                table: "Forum",
                newName: "IX_Forum_FilmId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Forum_Films_FilmId1",
                table: "Forum",
                column: "FilmId1",
                principalTable: "Films",
                principalColumn: "FilmId");

            migrationBuilder.AddForeignKey(
                name: "FK_Forum_Shows_ShowId1",
                table: "Forum",
                column: "ShowId1",
                principalTable: "Shows",
                principalColumn: "ShowId");
        }
    }
}
