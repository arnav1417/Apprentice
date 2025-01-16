const {SlashCommandBuilder} = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription("prints text in console"),
    async execute(interaction){
        await interaction.reply("Done");
    }
}