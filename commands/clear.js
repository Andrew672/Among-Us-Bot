module.exports = {
    name:'clear',
    aliases :['cl','clears'],
    run:async(bot,message,args)=> {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {message.channel.send("Désolé, vous n'avez pas la permission !")}
        if(isNaN(args[0]) || parseInt(args[0]) <= 0){
            return message.reply("Pas un nombre")
        }
        let deleteAmount;
        if(parseInt(args[0]) > 100){
            deleteAmount = 100;
        }else {
            deleteAmount= parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount+1, true)
        //let count = args[1]
		//if(!count)return message.channel.send("Veuillez indiquez un nombre de messages à suprimmer")
		//if (isNaN(count)) return message.channel.send("Indiquez un nombre valide !")
		//if (count < 1 || count > 99) return message.channel.send("Indiquez un chiffre en 1 et 99 !")
		//message.channel.bulkDelete(parseInt(count))
	}}		
