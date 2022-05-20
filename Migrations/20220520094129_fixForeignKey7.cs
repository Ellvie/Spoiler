using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Spoiler.Migrations
{
    public partial class fixForeignKey7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Forum_Films_FilmId",
                table: "Forum");

            migrationBuilder.DropForeignKey(
                name: "FK_Forum_Shows_ShowId",
                table: "Forum");

            migrationBuilder.DropColumn(
                name: "FilmKey",
                table: "Forum");

            migrationBuilder.AlterColumn<int>(
                name: "ShowId",
                table: "Forum",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "FilmId",
                table: "Forum",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Forum_Films_FilmId",
                table: "Forum",
                column: "FilmId",
                principalTable: "Films",
                principalColumn: "FilmId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Forum_Shows_ShowId",
                table: "Forum",
                column: "ShowId",
                principalTable: "Shows",
                principalColumn: "ShowId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Forum_Films_FilmId",
                table: "Forum");

            migrationBuilder.DropForeignKey(
                name: "FK_Forum_Shows_ShowId",
                table: "Forum");

            migrationBuilder.AlterColumn<int>(
                name: "ShowId",
                table: "Forum",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "FilmId",
                table: "Forum",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddColumn<int>(
                name: "FilmKey",
                table: "Forum",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

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
