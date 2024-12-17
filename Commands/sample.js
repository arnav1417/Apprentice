const {SlashCommandBuilder} = require("discord.js");
const { execute } = require("./test");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription("prints text in console"),
    async execute(interaction){
        console.log("hello");
        await interaction.reply("Done");
    }
}