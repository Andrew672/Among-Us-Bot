module.exports = {
    name:'help',
    aliases :['aide','helps'],
    run:async(bot,message,args)=> {
        const Discord = require('discord.js');
        message.channel.send({embed:{
			color:'#ba9704',
			
			title : 'Voici les différentes commandes :',
			url :"https://www.instagram.com/a_mbch/",
			description:"*Je suis en cours de développement*",
			fields:
			[
				{
				name : '!party create <date> <heure> <nombre_joueurs>',
				value : "```Cette commande permet d'indiquer aux joueurs présents que vous souhaitez créer une game et qu'ils puissent peut-être y participer."+"\nDès l'annonce de la game, un salon textuel et vocal sera crée automatiquement" + "\n"+ "\nPour utiliser cette commande, je vous propose un exemple :" + 
				" \n!party create 24/09/2020 16h 10"+
				"\nDonc on annonce ici, qu'il y'aura une game le 24/09/2020 à 16h pour 10 joueurs.```"
				},
				{
					name : '!clear <nbr>',
					value : "```Cette commande permet de supprimer un certain nombre de messages.```"
					
				},
				{
					name : '!mute / !unmute',
					value : "```Cette commande permet de mute et de unmute un salon entier afin de pouvoir jouer tranquillement.```"
					
				}
				
			],
			footer:{
				icon_url:"https://i.imgur.com/1jpGDRw.jpg",
				url:"https://www.instagram.com/a_mbch/",
				text:"Crée par Andrew M"
            }}})

        }
        }