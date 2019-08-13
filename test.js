const dischook  =  require('../dischook/main');

//Just as easy to send a normal message
const webhookURL = 'https://discordapp.com/api/webhooks/608208394234363916/OlZPugIsllAd-nHlO_QWKQqLPZF88bqT7_XXF6Vr-lPDpvvHnWphbG1ubGgL-yID1Azz'
const avatarURL = 'https://cdn.discordapp.com/avatars/516840368843522073/1040b30414894c8e427ccae7a96d3718.webp?size=128'
new dischook(webhookURL,'Retr0n',avatarURL)
	.setTitle('Im a title!')
	.setDescription('Im a description!')
	.addField('Field', '1', true)
	.addField('Field', '2', true)
	.setColor('#00ff44')
	.setTimestamp()
	.setFooter('Im a footer')
	.send()