const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      حياك الله ي بعد راسي
       خش بتنورنا فعاليات وكل شيء حلو موجود !
        ي بعد عيني الرابط تحت
         Moon SERVER

                                 [ https://discord.gg/3Ue3NCv  ] **`)
}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      حياك الله ي بعد راسي
       خش بتنورنا فعاليات وكل شيء حلو موجود !
        ي بعد عيني الرابط تحت
         Moon SERVER

                                 [ https://discord.gg/3Ue3NCv ] **`)
}).catch(console.error)
})
client.login('NTA3OTI0NjA1NjcxOTY0Njcz.DtsEIQ.hiVm06P_ecZaMS_FfT59NT9X8R0');