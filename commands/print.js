module.exports = 
{
    name:'print',
    aliases :['affiche'] ,
    run:async(bot,message,args)=> 
    {
        const Discord = require('discord.js');
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {message.channel.send("Désolé, vous n'avez pas la permission !")}
        else {
            var print = args.slice(0).join(" ");
             message.channel.send(print);
        }
    }    
}