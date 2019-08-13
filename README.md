# Dischook
 An easy to use and very lightweight webhook library for sending messages to a discord channels
# How To Use
```js
const dischook  =  require('dischook');

const webhookURL = 'https://discordapp.com/api/webhooks/hdjsjdujsbhdd'
const avatarURL = 'https://some-image-url.com/image.png'
new dischook(webhookURL,'Retr0n',avatarURL)
.setTitle('Im a titile')
```