const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require ('fs');
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
const { PREFIX , TOKEN} = require('./config');



bot.on('ready' , message => {
    console.log("I'm Ready !");

    bot.user.setActivity("Among us");
});

const init = async()=>{
	fs.readdir(`./commands`,(err,files) => {
		if(err) return console.error(err);
		files.forEach(file =>{
			const props = require (`./commands/${file}`);
			bot.commands.set(props.name , props);
			props.aliases.forEach(alias => bot.aliases.set(alias, props.name));
			console.log(`Loaded ${file}`);

		})
	})
}
init()

bot.on('message',message =>{
	
	
    if (!message.content.startsWith(PREFIX)) return;
	const args = message.content.slice(PREFIX.length).split(" ");
	//var id =message.channel.lastMessage.author.id;
	const command = args.shift().toLowerCase();
	const cmd = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command)) ;
	if (cmd) cmd.run(bot, message,args);
	if (isNaN(message.content)){message.delete()};
	
	
}),		
bot.login(TOKEN)
