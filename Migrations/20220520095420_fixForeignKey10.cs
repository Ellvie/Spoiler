using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Spoiler.Migrations
{
    public partial class fixForeignKey10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Forum_Films_FilmId",
                table: "Forum");

            migrationBuilder.DropForeignKey(
                name: "FK_Forum_Shows_ShowId",
                table: "Forum");

            migrationBuilder.DropIndex(
                name: "IX_Forum_FilmId",
                table: "Forum");

            migrationBuilder.DropColumn(
                name: "FilmId",
                table: "Forum");

            migrationBuilder.DropColumn(
                name: "FilmKey",
                table: "Forum");

            migrationBuilder.RenameColumn(
                name: "ShowKey",
                table: "Forum",
                newName: "ShowId1");

            migrationBuilder.RenameColumn(
                name: "ShowId",
                table: "Forum",
                newName: "FilmId1");

            migrationBuilder.RenameIndex(
                name: "IX_Forum_ShowId",
                table: "Forum",
                newName: "IX_Forum_FilmId1");

            migrationBuilder.CreateIndex(
                name: "IX_Forum_ShowId1",
                table: "Forum",
                column: "ShowId1");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Forum_Films_FilmId1",
                table: "Forum");

            migrationBuilder.DropForeignKey(
                name: "FK_Forum_Shows_ShowId1",
                table: "Forum");

            migrationBuilder.DropIndex(
                name: "IX_Forum_ShowId1",
                table: "Forum");

            migrationBuilder.RenameColumn(
                name: "ShowId1",
                table: "Forum",
                newName: "ShowKey");

            migrationBuilder.RenameColumn(
                name: "FilmId1",
                table: "Forum",
                newName: "ShowId");

            migrationBuilder.RenameIndex(
                name: "IX_Forum_FilmId1",
                table: "Forum",
                newName: "IX_Forum_ShowId");

            migrationBuilder.AddColumn<int>(
                name: "FilmId",
                table: "Forum",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "FilmKey",
                table: "Forum",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Forum_FilmId",
                table: "Forum",
                column: "FilmId");

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
    }
}
