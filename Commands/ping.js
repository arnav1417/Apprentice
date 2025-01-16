const {SlashCommandBuilder} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
    async execute(interaction){
        await interaction.deferReply();
        await interaction.editReply("Pong");
        await wait(2_000);
        await interaction.editReply("Hello Arnav!!");
    }
};