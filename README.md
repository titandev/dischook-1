# Dischook
<<<<<<< HEAD
Dischook is an easy-to-use but yet powerful modules for interacting with Discord webhooks.
=======
Dischook is an easy-to-use, yet powerful modules for interacting with Discord webhooks.
# Getting Started
> Installing
```
npm install dischook --save
```

>>>>>>> 99ef8e11f382eb9d13611b3694c1fd4e6c14d9c5
* Examples
Embeds are done exactly like RichEmbed in the [Discord.JS](http://discord.js.org) libaray.
> Requiring Dischook
```js
const dischook  =  require('dischook');
```
> Using Dischook
* How do you get a webhook? you must have "MANAGE_CHANNELS" permission. Find the channel you'd like to send the message too, > Webhooks > Create Webhook
```js
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
<<<<<<< HEAD
> You can also send normal messages. you can also use markdown!
=======
> You can also send normal messages. And yes, it supports markdown!
>>>>>>> 99ef8e11f382eb9d13611b3694c1fd4e6c14d9c5
```js
const dischook  =  require('dischook');

const webhookURL = 'https://discordapp.com/api/webhooks/74947297497294/AhkKjfosAYQIslfh'
const avatarURL = 'https://some-image-url.com/image.png'
new dischook(webhookURL, 'Example Bot', avatarURL)
    .send('This is a regular message with no embed, **and this is some bold text**')
```

# Contributor

* Retr0n
    * Discord: Retr0n#0001
    * Twitter: [ITS_NIGH7OWL](https://twitter.com/ITS_NIGH7OWL)
* Nightz
    * Discord: Nightz#7233
    * Twitter: [NightzBR](https://twitter.com/NightzBR)
