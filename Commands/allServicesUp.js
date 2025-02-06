const { SlashCommandBuilder } = require("discord.js");
const { allServicesUp } = require("../Helper_function/all_services_up");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("dup")
        .setDescription("Starts container")
        .addStringOption(option =>
            option.setName('container')
                .setDescription("Specific Container to start")
                .setRequired(false)
        ),
    async execute(interaction) {
        await interaction.deferReply();
        const containerName = interaction.options.getString('container');
        if (containerName) {
            const output = await allServicesUp(containerName);
            if (output.Complete) await interaction.editReply(`${containerName} Started`)
            else await interaction.editReply(`Error in starting ${containerName}`);
        }
        else {
            const output = await allServicesUp();
            if (output.Complete) await interaction.editReply("Services Started")
            else if (output.no_file) await interaction.editReply(`*try running /genfile*`);
            else await interaction.editReply('Error in starting');
        }
    }

}