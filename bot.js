const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("537216779840258061")
setInterval(function() {
channel.send(`spam spam spam spam spam spam spam spam spam spam spam spam spam
spam spam spam spam spam spam spam spam spam spam spam spam spam
spam spam spam spam spam spam spam spam spam spam spam spam spam
spam spam spam spam spam spam spam spam spam spam spam spam spam
spam spam spam spam spam spam spam spam spam spam spam spam spam
spam spam spam spam spam spam spam spam spam spam spam spam spam
spam spam spam spam spam spam spam spam spam spam spam spam spam
spam spam spam spam spam spam spam spam spam spam spam spam spam
spam spam spam spam spam spam spam spam spam spam spam spam spam
spam spam spam spam spam spam spam spam spam spam spam spam spam
 `);
}, 30)
})

client.login(process.env.BOT_TOKEN);