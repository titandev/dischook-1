# Dischook
 An easy to use and very lightweight webhook library for sending messages to discord channels
# Examples
```js
const dischook  =  require('dischook');

//Embeds are done exactly like in the Discord.js library
const webhookURL = 'https://discordapp.com/api/webhooks/74947297497294/AhkKjfosAYQIslfh'
const avatarURL = 'https://some-image-url.com/image.png'
new dischook(webhookURL, 'Example Bot', avatarURL)
.setTitle('Im a title!')
.setDescription('Im a description!')
.addField('Field', '1')
.addField('Field', '2', true)
.setColor('#00ff44')
.setTimestamp()
.setFooter('Im a footer')
.send()
```
```js
const dischook  =  require('dischook');

//Just as easy to send a normal message
const webhookURL = 'https://discordapp.com/api/webhooks/74947297497294/AhkKjfosAYQIslfh'
const avatarURL = 'https://some-image-url.com/image.png'
new dischook(webhookURL, 'Example Bot', avatarURL)
.send('This is a regular message with no embed')
```
