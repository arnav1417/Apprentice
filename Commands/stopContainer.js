const {SlashCommandBuilder} = require("discord.js");
const {stopContainer} = require("../Helper_function/stop_Containers"); 
module.exports = {
    data : new SlashCommandBuilder()
     .setName('stop')
    .setDescription('Stop Docker container')
    .addStringOption(option =>
      option.setName('container')
        .setDescription('Container to stop')
        .setRequired(true)
    ),
    async execute(interaction){
        await interaction.deferReply();
        const containerName = interaction.options.getString('container');
        const output = await stopContainer(containerName);
        if(output.Complete) await interaction.editReply(`${containerName} has stopped`);
        else if(output.stderr) await interaction.editReply(`${output.stderr}`);
        else await interaction.editReply(`Error in stopping ${containerName}`);
    }
}