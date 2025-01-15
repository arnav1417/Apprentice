const { Client, Collection,Events, GatewayIntentBits} = require("discord.js");
const dotenv = require("dotenv").config({path:__dirname+'/.env'}).parsed;
const token = dotenv.token;
const fs = require("node:fs");
const path = require("node:path");
const client = new Client({intents:[GatewayIntentBits.Guilds] });

client.commands = new Collection();

const folderPath = path.join(__dirname, 'Commands');
const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));

for(const file of commandFiles){
     const filepath = path.join(folderPath, file);
     const command = require(filepath);
     if('data' in command && 'execute' in command){
          client.commands.set(command.data.name, command);
     }else{
          console.log('[Warning]');
     }
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(token);
