module.exports = 
{
  name:'del',
  aliases :['dels'] ,
  run:async(bot,message,args)=> 
    {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {message.channel.send("Désolé, vous n'avez pas la permission !!")}
        else 
        {
            let fetchedChannel = message.guild.channels.cache.find(r => r.id === args[0]);
            fetchedChannel.delete(); 
        }
           
    
    }
          
}
