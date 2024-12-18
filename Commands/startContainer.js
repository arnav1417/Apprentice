const {SlashCommandBuilder} = require("discord.js");
const {startContainer} = require("../Helper_function/start_Container"); 
module.exports = {
    data : new SlashCommandBuilder()
     .setName('start')
    .setDescription('Start Docker container')
    .addStringOption(option =>
      option.setName('container')
        .setDescription('Container to start')
        .setRequired(true)
    ),
    async execute(interaction){
        await interaction.deferReply();
        const containerName = interaction.options.getString('container');
        const output = await startContainer(containerName);
        if(output.Complete) await interaction.editReply(`${containerName} has restarted`);
        else if(output.stderr) await interaction.editReply(`${output.stderr}`);
        else await interaction.editReply(`Error in restarting ${containerName}`);
    }
}