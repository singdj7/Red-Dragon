//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is RED DRAGON💻𑂲
My Creator is sihilel🍃` //Costomize Alive Message ( `𝆄👻⃝⃪⃬⃑🍫ｈᴇꪲ͢ʏ ｔʜ̶͢͠ᴇʀ͓ᴇ ｉ ａᴍ Ｏɴ̬ʟɪꪲɴᴇ̬ Ｎᴏ͟͡ᴡ 🙃⃝⃪⃬⃗🍃𝆄

° |🐼ɪ ᴍ ᴄᴜʀʀᴇɴᴛʟʏ ᴡᴏʀᴋɪɴɢ ᴏɴ ʙᴏᴛ 
° |🌱ɪ ᴍ ᴄᴜʀʀᴇɴᴛʟʏ ʟᴇᴀʀɴɪɴɢ ᴀʙᴏᴜᴛ ᴜ
° |💬ᴀsᴋ ᴍᴇ ᴀʙᴏᴜᴛ ᴜ
° |🍓ʜᴏᴡ ᴛᴏ ʀᴇᴀᴄʜ ᴍᴇ
 ɪ ᴍ  ◅│
            
🕊️⃞⃪⃕🍀̶||•S͢ɪͥʜ̷͓͡ɪʟͣᴇᷟʟ̷꯭ ɴⷢᴏ̷ⷪ͢ᴠͫᴀͤ•||🐰⃞⃪⃮⃯⃕🍀

□⃥ᴡʜᴀᴛsᴀᴘᴘ:-
http://wa.me/+94702314166

□⃥ᴡᴀ ɢʀᴏᴜᴘ
https://chat.whatsapp.com/KTK7dvSHGC75jp7jxE4YMv

° |🧑🏻‍💻ɢᴇɴᴅᴇʀ :- ᴍᴀʟᴇ᭢` )

global.owner = ['+94702314166'] //Owner number in aive msg
global.premium = ['+94702314166'] //Owner Number info
global.ownernomer = '+94702314166' //Owner Number <<<

global.ownername = '🕊️⃞⃪⃕🍀̶||•SIᕼIᒪEᒪ-ΝoᏙᎪ•||🐰⃞⃪⃮⃯⃕🍀' //Owner Name
global.botname = ' ༆RED❖DRAGON𑂲' //Bot Name

global.button = '🍃WHATSAPP🍃' //Costomize A Button Name In Alive Message
global.btnurl = 'http://wa.me/+94702314166' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '🍫⃞⃪⃯⃗ ᏕᎥᏂᎥĿel bot🙃⃞⃥⃪⃗🍃' //Bot Pacage Name
global.author = '🇰🇾sihilel nova❯❯' //Author Name
global.prefa = ['','!','.','🍃','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⫸' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '©_sᎥhᎥᏞᎬᏞ.' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://chat.whatsapp.com/KTK7dvSHGC75jp7jxE4YMv' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉🤭',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '🤫Pleas Wait...im fixing error',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
