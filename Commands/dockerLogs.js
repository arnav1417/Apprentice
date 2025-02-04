const { SlashCommandBuilder } = require("discord.js");
const { dockerLogs } = require("../Helper_function/docker_logs.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("logs")
        .setDescription("Shows container logs")
        .addStringOption(option=>
            option.setName('containername')
            .setDescription('Specific Container to show logs for:')
            .setRequired(true)
        ).addIntegerOption(option=>
            option.setName('tail')
            .setDescription('Set Tail length, 0 for all')
            .setRequired(false)
        )
        ,
    async execute(interaction){
        await interaction.deferReply();
        const containerName = interaction.options.getString('containername');
        let tailLength = interaction.options.getInteger('tail');
        if(!tailLength) tailLength=10;
        console.log(tailLength);
        const output = await dockerLogs(containerName,tailLength);
        console.log(output.Complete)
        if(output.Complete) await interaction.editReply(`${output.Complete}`);
        else await interaction.editReply("Error in Logs generation!!");  
    }

}