module.exports = 
{
  name:'mort',
  aliases :['dead'] ,
  run:async(bot,message,args,user)=> 
  {
    if (message.member.voice.channel) 
    {
        let role = message.guild.roles.cache.find(r => r.name === "mort");  
        let member = message.mentions.members.first();
        if (!message.mentions.members.first().roles.cache.some((role) =>role.name ==="mort"))
        {
            member.roles.add(role)
            message.channel.send(message.mentions.members.first().user.username +" est mort. Ne peux donc plus parler.(Refaire !mort dès la fin de la game pour pouvoir parler)")
            member.voice.setChannel('756959419769815116')
        }
        else
        {
            member.roles.remove(role)
            message.channel.send(message.mentions.members.first().user.username +" peut à nouveau parler.")
            member.voice.setChannel('756959419769815115')
            
        }
      
    } 
    else 
    {
      message.reply('Vous devez être dans un channel vocal !!');
    }
          
  }
}