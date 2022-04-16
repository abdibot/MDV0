  const { getBuffer } = require('../function.js')
  const groupResponse = async (sock, update) => {
   const metadata = await sock.groupMetadata(update.id)   
   for (let participant of update.participants) {
    try{
       let metadata = await sock.groupMetadata(update.id)
       let participants = update.participants
       for (let num of participants) {
         try {
           ppuser = await sock.profilePictureUrl(num, 'image')
         } catch {
           ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         }
         if (update.action == 'add') {
          var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `WelcomeðŸ‘‹` 
               }, type: 1 
              }
             ]
        sock.sendMessage(
         update.id, 
         { 
         caption: `*HALLO KAK @${num.split("@")[0]} SELAMAT DATANG DI GRUP ${metadata.subject}* \n\nJANGAN LUPA PATUHI RULES GRUP MAUPUN GRUP KECIL TETAP JAGA TINGKAH KAMU YAK HARGAI\nTOLONG HARGAI GRUP INI OK ASSALAMUALAIKUM*`, 
         location: { 
          jpegThumbnail: await getBuffer(ppuser) 
         }, 
         buttons: button, 
         footer: 'HELLO BOT_Multi~Device', mentions: [num] })
         } 
        else 
        if (update.action == 'remove') {
          var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `ByeðŸ‘‹` 
               }, type: 1 
              }
             ]
        sock.sendMessage(
           update.id, 
          { 
           caption: `*@${num.split("@")[0]} SELAMAT TINGGAL DARI GRUP ${metadata.subject}*\NBALIK LAGI YAH DAN JANGAN DI TIRU MEMBER LAIN OK, ASSALAMUALAIKUM`, 
           location: { jpegThumbnail: await getBuffer(ppuser) 
          }, 
           buttons: button, 
           footer: 'HELLO BOT_Multi~Device', 
           mentions: [num] 
             }
             )
             }
            }
        } catch (err) {
        console.log(err)
      }
    }   
  }
module.exports = { groupResponse }  
