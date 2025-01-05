const { SlashCommandBuilder } = require("discord.js");
const { allServicesDown } = require("../Helper_function/all_services_down.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("dcd")
        .setDescription("Stops container")
        .addStringOption(option=>
            option.setName('containerdown')
            .setDescription("Specific Container to stop")
            .setRequired(false)
        ),
    async execute(interaction){
        await interaction.deferReply();
        const containerName = interaction.options.getString('containerdown');
        if(containerName){
            const output = await allServicesUp(containerName);
            if(output.Complete) await interaction.editReply(`${containerName} Stopped`)
            else await interaction.editReply(`Error in stopping ${containerName}`);
        }
        else{
            const output = await allServicesDown();
            if(output.Complete) await interaction.editReply("Services stopped")
            else await interaction.editReply("Error in stopping");  
        }
    }

}