const Discord = require('discord.js');
 
const bot = new Discord.Client();
 
bot.on('ready', () => {
    console.log("I am ready");
});
 
bot.on('message', message => {
    if(message.author !== bot.user) return;
 
    if(message.content === "hello") {
        message.channel.sendMessage("hello");
    }
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
