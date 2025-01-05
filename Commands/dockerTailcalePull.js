const { SlashCommandBuilder } = require("discord.js");
const { tailscalePull } = require('../Helper_function/tailscale_pull');
const { allServicesUp } = require("../Helper_function/all_services_up");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('tailscale-pull')
        .setDescription('Pulls latest Tailscale image')
        .addBooleanOption(option => 
            option.setName('update')
                .setDescription('Updates as well')
                .setRequired(false)
        ),
    async execute(interaction) {
        await interaction.deferReply();
        const bool = interaction.options.getBoolean('update');
        if (bool) {
            const output = await tailscalePull();
            if (output.complete) {
                const allup = await allServicesUp();
                if (allup.complete) await interaction.editReply("Images have Started")
                else await interaction.editReply("Error in starting containers")
            }
            else await interaction.editReply("Error in pulling image");
        }
        else {
            const output = await tailscalePull();
            if (output.complete) {
                await interaction.editReply("Images pulled Successfully");
            }
            else await interaction.editReply("Error in pulling image");
        }
    }
}