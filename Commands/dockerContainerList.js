const { SlashCommandBuilder } = require("discord.js");
const { listContainer } = require("../Helper_function/list_Container");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('docker-list')
        .setDescription('List Docker containers')
        .addStringOption(option =>
            option.setName('container')
                .setDescription('Container to list')
                .setRequired(false)
        ),
    async execute(interaction) {
        await interaction.deferReply();
        const containerName = interaction.options.getString('container');
        if (containerName) {
            const output = await listContainer(containerName);
            if (output.Complete) await interaction.editReply(`${output.Complete}`);
            else if (output.stderr) await interaction.editReply(`${output.stderr}`);
            else await interaction.editReply(`Error in listing ${containerName}`);
        }
        else {
            const output = await listContainer();
            if(output.Complete) await interaction.editReply(`${output.Complete}`);
            else if(output.stderr) await interaction.editReply(`${output.stderr}`);
            else await interaction.editReply(`Error in listing`);
        }
    }
}