module.exports = 
{
  name:'unmute',
  aliases :['unmutes'] ,
  run:async(bot,message,args)=> 
  {
    if (message.member.voice.channel) 
    {
      let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
      for (const [memberID, member] of channel.members)
      {
        member.voice.setMute(false);
      }
    } 
    else 
    {
      message.reply('Vous devez être dans un channel vocal !!');
    }
          
  }
}