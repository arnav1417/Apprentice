const {SlashCommandBuilder} = require("discord.js");
const {update} = require("../Helper_function/APT_update")
module.exports={
    data: new SlashCommandBuilder()
    .setName('update')
    .setDescription("Updates apt"),
    async execute(interaction){
        await interaction.deferReply();
        // const output = await update();
        await interaction.editReply("Updates completed");
    }
};