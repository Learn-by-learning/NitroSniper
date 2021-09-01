/// Nitro Sniper Bot ///
/* CODE: */

const nitro = require('discord.js-nitro');
const boost = true;   
message.channel.send(nitro(boost));
  
// Ejemplos:

// Usando IF:

if(command === "nitro"){
const nitro = require('discord.js-nitro');
const boost = true;   
message.channel.send(nitro(boost));
}

// Usando Client en Index.js:

client.on("message", async message => {
 if(message.author.bot) return; 
  if (message.content.startsWith("Comando")) { 
const nitro = require('discord.js-nitro');
const boost = true;   
message.channel.send(nitro(boost));
} 
});

/* Handlers */

// Avanzado: 

const Discord = require('discord.js')
module.exports = {
	name: 'gen-nitro',
	category: '  ', // Coloca tu carpeta
	run: async (client, message, args) => {
const nitro = require('discord.js-nitro');
const boost = true;   
message.channel.send(nitro(boost));
	},
};
