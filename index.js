const
      {
            WAConnection,
            MessageType,
            Presence,
            MessageOptions,
            Mimetype,
            WALocationMessage,
            WA_MESSAGE_STUB_TYPES,
            WA_DEFAULT_EPHEMERAL,
            ReconnectMode,
            ProxyAgent,
            GroupSettingChange,
            waChatKey,
            mentionedJid,
            processTime,
      } = require("@adiwajshing/baileys")

const { addCommands, checkCommands, deleteCommands } = require('./lib/commands')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))

/////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉 𝘼𝘿𝘿 𝘾𝙈𝘿 & 𝘿𝙀𝙇𝙀𝙏𝙀***\\\\\
 var _0x7dfa=["\x70\x75\x73\x68","\x2E\x2F\x64\x61\x74\x61\x62\x61\x73\x65\x2F\x73\x63\x6F\x6D\x6D\x61\x6E\x64\x2E\x6A\x73\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x69\x64","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x63\x68\x61\x74\x73"];const addCmd=(_0x69b2x2,_0x69b2x3)=>{const _0x69b2x4={id:_0x69b2x2,chats:_0x69b2x3};_scommand[_0x7dfa[0]](_0x69b2x4);fs[_0x7dfa[3]](_0x7dfa[1],JSON[_0x7dfa[2]](_scommand))};const getCommandPosition=(_0x69b2x2)=>{let _0x69b2x6=null;Object[_0x7dfa[6]](_scommand)[_0x7dfa[5]]((_0x69b2x7)=>{if(_scommand[_0x69b2x7][_0x7dfa[4]]=== _0x69b2x2){_0x69b2x6= _0x69b2x7}});if(_0x69b2x6!== null){return _0x69b2x6}};const getCmd=(_0x69b2x2)=>{let _0x69b2x6=null;Object[_0x7dfa[6]](_scommand)[_0x7dfa[5]]((_0x69b2x7)=>{if(_scommand[_0x69b2x7][_0x7dfa[4]]=== _0x69b2x2){_0x69b2x6= _0x69b2x7}});if(_0x69b2x6!== null){return _scommand[_0x69b2x6][_0x7dfa[7]]}};const checkSCommand=(_0x69b2x2)=>{let _0x69b2xa=false;Object[_0x7dfa[6]](_scommand)[_0x7dfa[5]]((_0x69b2x7)=>{if(_scommand[_0x69b2x7][_0x7dfa[4]]=== _0x69b2x2){_0x69b2xa= true}});return _0x69b2xa}

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat malam 🌃'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat senja 🌆'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat sore 🌆'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat siang 🏙️'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat pagi 🌇'
                                         }
if(time2 < "06:00:00"){
var ucapanWaktu = 'Selamat pagi 🌅'                                       }
//=================================================//
module.exports = xdev = async (xdev, dev) => {
      try {
        if (!dev.hasNewMessage) return
        dev = dev.messages.all()[0]
            if (!dev.message) return
            if (dev.key && dev.key.remoteJid == 'status@broadcast') return
            global.blocked
            dev.message = (Object.keys(dev.message)[0] === 'ephemeralMessage') ? dev.message.ephemeralMessage.message : dev.message
            const content = JSON.stringify(dev.message)
            const from = dev.key.remoteJid
            const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
            const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
               
               //MengAutoRespon
               const type = Object.keys(dev.message)[0]        
               var pes = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
                   const messagesC = pes.slice(0).trim()

                const cmd = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'              
        body = (type === 'conversation' && dev.message.conversation.startsWith(prefix)) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption.startsWith(prefix) ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption.startsWith(prefix) ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text.startsWith(prefix) ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? (getCmd(dev.message.stickerMessage.fileSha256.toString('hex')).startsWith(prefix) ? getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) : '') : ""
            budy = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
        button = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedDisplayText : ''
        isImage = (type === 'imageMessage')
        listmes = (type == 'listResponseMessage') ? dev.message.listResponseMessage.title : ''
            const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()        
            const args = body.trim().split(/ +/).slice(1)
            const isCmd = body.startsWith(prefix)
            const q = args.join(' ')

            const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            const timeWit= moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
            const botNumber = xdev.user.jid
            const botNumberss = xdev.user.jid + '@c.us'
            const isGroup = from.endsWith('@g.us')
            const sender = dev.key.fromMe ? xdev.user.jid : isGroup ? dev.participant : dev.key.remoteJid
            const isOwner = ownerNumber.includes(sender)
            const totalchat = await xdev.chats.all()
            const groupMetadata = isGroup ? await xdev.groupMetadata(from) : ''
            const groupName = isGroup ? groupMetadata.subject : ''
            const groupId = isGroup ? groupMetadata.jid : ''
            const groupMembers = isGroup ? groupMetadata.participants : ''
            const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupOwner = isGroup ? groupMetadata.owner : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            const isBanchat = isGroup ? bancht.includes(from) : false
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const AntiVirtex = isGroup ? antivirtex.includes(from) : false
        const conts = dev.key.fromMe ? xdev.user.jid : xdev.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = dev.key.fromMe ? xdev.user.name : conts.notify || conts.vname || conts.name || '-'
        chatss = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''

case 'stiker':
case 'sticker':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buff = fs.readFileSync(ran)
client.sendMessage(from, buff, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
}

case 'grup':
case 'gc':
case 'group':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args[0] === 'buka') {
reply(`Perintah diterima, silahkan order grup buka berarti open`)
client.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
reply(`Perintah diterima, udah close ya admin capek besok lagi:)`)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break

case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara ngab')
try {
      num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
      client.groupAdd(from, [num])
} catch (e) {
      console.log('Error :', e)
      reply('Gagal menambahkan target, mungkin karena di private')
      }
break

case 'linkgc':
case 'linkgrup':
case 'linkgrop':
case 'linkgroup':
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot not admin')
linkgc = await xdev.groupInviteCode(from)
yeh = `\`\`\`「 Link Group 」\`\`\`\n•> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\n\n_bantu ramein:)_`
xdev.sendMessage(from, yeh, text, { quoted: dev })
break

case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di kick!')
      mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
      teks = 'Perintah di terima, mengeluarkan beban grup :\n'
for (let _ of mentioned) {
      teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
client.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan beban grup : @${mentioned[0].split('@')[0]}`, mentioned, true)
client.groupRemove(from, mentioned)
}
break

case 'addrespon':{
if (!isOwner && !dev.key.fromMe) return reply(mess.owner)
if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
let input1 = body.slice(11)
if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
let input = input1.split("|")
if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
addCommands(input[0], input[1], sender, commandsDB) 
reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
}
break

case 'dellrespon':
case 'delrespon':{
if (!isOwner && !dev.key.fromMe) return reply(mess.owner)
if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
if (!checkCommands(body.slice(11), commandsDB)) return reply(`Key tersebut tidak ada di database`)
deleteCommands(body.slice(11), commandsDB)
reply(`Berhasil menghapus respon dengan key ${body.slice(11)}`)
}
break

case 'listrespon':{
let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
for (let i = 0; i < commandsDB.length; i++){
txt += `❏ Key : ${commandsDB[i].pesan}\n`
}
reply(txt)
}
break

case 'addcmd': 
case 'setcmd':{
if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
addCmd(kodenya, q)
reply("_Success_")
} else {
reply('tag stickenya')
}
}
break

case 'delcmd':{
if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
_scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
reply("_Success_")
}
break

case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break

case 'revoke':
if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
xdev.revokeInvite(from)
reply('_Success_')
break

case 'hidetag':
if (!dev.key.fromMe & !isGroupAdmins) return reply(mess.admin)
if (!isGroup) return reply(mess.only.group)
var value = args.join(' ')
var group = await xdev.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var optionshidetag = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: dev
}
xdev.sendMessage(from, optionshidetag, text)
break

