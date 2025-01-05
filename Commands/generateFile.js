const { SlashCommandBuilder } = require("discord.js");
const { generateFile } = require("../Helper_function/generate_file");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("genfile")
        .setDescription("creates container file")
    ,
    async execute(interaction) {
        await interaction.deferReply();
        const output = await generateFile();
        if (output.Complete) await interaction.editReply("File Generated");
        else await interaction.editReply("Error in File Generation");
    }

}