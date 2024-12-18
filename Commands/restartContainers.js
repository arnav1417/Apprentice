const {SlashCommandBuilder} = require("discord.js");
const {restart} = require("../Helper_function/restart"); 
module.exports = {
    data : new SlashCommandBuilder()
     .setName('restart')
    .setDescription('Restart Docker container')
    .addStringOption(option =>
      option.setName('container')
        .setDescription('Container to restart')
        .setRequired(true)
    ),
    async execute(interaction){
        await interaction.deferReply();
        const containerName = interaction.options.getString('container');
        const output = await restart(containerName);
        if(output.Complete) await interaction.editReply(`${containerName} has restarted`);
        else if(output.stderr) await interaction.editReply(`${output.stderr}`);
        else await interaction.editReply(`Error in restarting ${containerName}`);
    }
}