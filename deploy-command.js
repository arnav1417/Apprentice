const {REST, Routes} = require("discord.js");
const dotenv = require("dotenv").config().parsed;
const {token,clientId, guildId} = dotenv;
const fs = require("node:fs");
const path = require("node:path");

const commands = [];

const folderPath = path.join(__dirname, 'Commands');
const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));

for(const file of commandFiles){
     const filepath = path.join(folderPath, file);
     const command = require(filepath);
     if('data' in command && 'execute' in command){
        commands.push(command.data.toJSON());
     }else{
          console.log('[Warning]');
     }
}

const rest = new REST().setToken(token);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();