const Discord = require("discord.js")
const thtime = require("./thtime")
const chkboss = require("./chkboss")
const botconfig = require("./botconfig")
const pic = require("./pic")
var bot = new Discord.Client()
var channelName = botconfig.channelName

bot.on("ready",function(){
    console.log('List GUilds : '+bot.guilds.array())
    console.log('Name Channel : '+channelName)
    console.log("Ready.....................")
})

setInterval(()=>status(), 10000);
setInterval(()=>alertz(), 60000);

bot.on("message", (msg) => {
    if (msg.content === "บอส"){
        h = thtime().h
        if (chkboss().t === "00:30" && h == 23){       //Check if the time is 00.30 and 23 hours tomorrow.
                var dayz = thtime().dayz
        }else {
                var dayz = thtime().days            //If not, 00.30 use today's date.
            }
        sendEmbed()
   }
    
   if (msg.content === "listguild"){
         var serverListguild = "```"+bot.guilds.array()+"```"
         msg.channel.send(serverListguild)
   }
    
   if (msg.content === "info"){
            msg.channel.send(botconfig.invitebot)
   }
    
   function sendEmbed(){
        const embed = new Discord.RichEmbed()
        .setTitle("__ * The next Boss * __")  //Topics
        .setAuthor("Boss Timer ThBDO", "https://www.picz.in.th/images/2018/06/22/48XhJt.png")  //icon Ask
        .setColor(0x112263)   //Insert color
        .setDescription("```cs\n วัน '"+dayz+"'  เวลา '"+chkboss().t+"' Why \n\n ####  "+chkboss().boss+"  ####```")   //Description
       // .addField("day"+dayz+"Time"+chkboss().t,"```cs\n"+"The next Boss #"+chkboss().boss+"```")
        .setFooter("Boss Timer ThBDO "+botconfig.version+" พิมพ์ info", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twemoji_1f437.svg/2000px-Twemoji_1f437.svg.png") //Message text
        .setImage(pic.tableboss)     //Big picture
        .setThumbnail(chkboss().imgboss)   //Small right
        .setTimestamp()  //The bottom time
         msg.channel.send({embed})
   }
    
})

function status(){     
    bot.user.setGame('NEXT '+chkboss().t+' '+chkboss().boss)
}

function alertz() {
    day = thtime().day
    h = thtime().h
    m = thtime().m
         
  if (day == 0 || day == 1 || day == 2 || day == 3 || day == 4 || day == 6) {
    if (h == 0 && m == 15) {
        sendAllServer()
    }
  }
    
 if (day == 0 || day == 1 || day == 2 || day == 3 ||  day == 6) {
    if (h == 5 && m == 45) {
        sendAllServer()
    }
  }
    
  if (day == 0 || day == 2 || day == 3 || day == 4 || day == 5 || day == 6) {
    if (h == 9 && m == 45) {
        sendAllServer()
     }
  }
    
  if (h == 13 && m == 45) {
        sendAllServer()
  }
    
  if (h == 18 && m == 45) {
        sendAllServer()
  }
   
  if (h == 22 && m == 45) {
        sendAllServer()
  }
    
}

function sendAllServer(){    //Send all rooms with bots.
           var serverList = bot.guilds.array()
           serverList.forEach(guild => {
                if(guild.channels.find("name", channelName)){
                var channel =  guild.channels.find("name", channelName)
                //channel.send('@everyone Test to send messages to every room at Addbot.'+chkboss().boss+' Another 15 minutes')
                channel.send('@everyone '+chkboss().boss+'Another 15 minutes')
                console.log('Send a message to:'+serverList)
            }
        })
}

bot.login(process.env.BOT_TOKEN)
//bot.login(botconfig.tokenbotdiscord)
