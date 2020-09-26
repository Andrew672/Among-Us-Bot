module.exports = {
    name:'party',
    aliases :['partie'],
    run:async(bot,message,args)=> {
    const Discord = require('discord.js');
    var ids =message.channel.lastMessage.author.id;
 const exampleEmbed = new Discord.MessageEmbed()
 .setColor('#ED6428')
 .setTitle('```Game Annoncée```')		
 .setAuthor('Among us', 'https://i.imgur.com/DBdaRUW.png')
 .setDescription("Que la partie commence !")
 .setThumbnail('https://i.imgur.com/BcC9eLN.png')
 .addFields(
    { name: 'Crée par :', value: message.author },
    { name: '**Date** : ', value:"Le " + args[1] },
    { name: '**Heure** : ', value:"A " + args[2] },
    { name: '**Nombre de joueurs requis** : ', value: args[3] +" joueurs" },)
 .setTimestamp(new Date())
 .setFooter("N'hésite pas à dire si tu souhaite y participer ! \nPrésent : ✅","https://i.imgur.com/1jpGDRw.jpg");

 if ((args[0]=== 'create') && (args[1] !== undefined) && (args[2] !== undefined) && (args[3] !== undefined)){
    var id =message.channel.lastMessage.id;
    var c = args[1]
    var rola = message.author.username +"--"+args[1] +"--"+ message.author
    message.guild.channels.create(rola,{
        type: 'text',
        permissionOverwrites: [     
           {
            id: message.guild.roles.cache.find((role)=> role.name ==='@everyone'),
            deny: ['VIEW_CHANNEL'],
         },
           {
            id: message.author.id,
            allow: ['VIEW_CHANNEL'],
         },
         ],
      }).then((channel) =>{
          const categoryId = '758727073392492598'
          channel.setParent(categoryId)
      })
    message.guild.channels.create(rola,{
        type: 'voice',
        permissionOverwrites: [
            {
              id: message.guild.roles.cache.find((role)=> role.name ==='@everyone'),
              deny: ['VIEW_CHANNEL'],
           },
           {
            id: message.author.id,
            allow: ['VIEW_CHANNEL'],
         },
         ],
      }).then((channel) =>{
          const categoryId = '758727073392492598'
          channel.setParent(categoryId)
      })
   
      message.guild.roles.create({
		data:{
			name : rola,
			color:'Gray'
            }})    

        message.channel.send(exampleEmbed).then(function(message){
        message.react('✅')
        
        bot.on("messageReactionAdd",(messageReaction,user) =>{
	
            const messager = messageReaction.message;
            const newrole1 = message.guild.roles.cache.find((role) => role.name === rola)

            const member = messager.guild.members.cache.get(user.id);
            if(user.bot)return;
            if(messageReaction.message.channel.id !="758333079139516537"){}
            if(messageReaction.count > 11){
                member.createDM().then((channel) =>{
                channel.send("Game Pleine" )
                 
            },)}
            else if (messageReaction.emoji.name === '✅')
                {
                member.roles.add(newrole1);
                }

                })})
        bot.on("messageReactionRemove",(messageReaction,user) => 
        {
                const message = messageReaction.message;
                const member = message.guild.members.cache.get(user.id);
                if(user.bot)return;
                const newrole1 = message.guild.roles.cache.find((role) => role.name === rola)
        
                if(messageReaction.message.channel.id !="758333079139516537"){}
                    
                    
                else if (messageReaction.emoji.name === '✅')
                    {
                    member.roles.remove(newrole1)
                    }
                    
        })
   }
}
}
            
            
        




