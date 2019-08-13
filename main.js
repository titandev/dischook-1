const { isEmpty } = require('lodash')
const fetch = require('snekfetch')
const { EmptyEmbed, EmptyMessage } = require('./libs/errors')
module.exports = class Dischook {
	/**
	 * @param {String} url Webhook URL
	 * @param {String} [name] Name of webhook
	 * @param {String} [avatar_url] URL for avatar
	 * @description Initialization for Dischook to send a message through the webhook URL
	 */
	constructor(url, name = null, avatar_url = null) {
		this.webhook = url
		this.name = name
		this.avatar_url = avatar_url
		this.message = {
			embeds: [{}]
		}
		if (name) Object.assign(this.message, {
			'username': name
		})
		if (avatar_url && this.avatar_url) Object.assign(this.message, {
			'avatar_url': avatar_url
		})
	}
	/**
	 * @param {string} text The title's text
	 */
	setTitle(text) {
		Object.assign(this.message.embeds[0], {
			title: text
		})
		return this
	}
	setDescription(text) {
		Object.assign(this.message.embeds[0], {
			description: text
		})
		return this
	}
	/**
	 * @param {String} title Fields title
	 * @param {String} value Fields text 
	 * @param {Boolean} [inline=false] Inline field or not
	 */
	addField(title, value, inline = false) {
		if (!this.message.embeds[0].fields) {
			Object.assign(this.message.embeds[0], {
				fields: new Array
			})
		}
		this.message.embeds[0].fields.push({
			name: title,
			value: value,
			inline: inline
		})
		return this
	}
	/**
	 * @param {String} text (Hex) Embeds color
	 */
	setColor(text) {
		Object.assign(this.message.embeds[0], {
			color: text
		})
		return this
	}
	/**
	 * @param {string} text Footers text
	 */
	setFooter(text) {
		Object.assign(this.message.embeds[0], {
			footer: {
				'text': text
			}
		})
		return this
	}
	/**
	 * @returns Current date
	 */
	setTimestamp() {
		Object.assign(this.message.embeds[0], {
			timestamp: new Date()
		})
		return this
	}
	/**
	 * @param {string} message 
	 * @returns Message sent to webhook through POST request
	 */
	send(message = null) {
		if (isEmpty(this.message.embeds[0]) && message) {
			if (!message.replace(/\s/g, '').length) throw new EmptyMessage()
			return fetch.post(this.webhook)
				.send({
					username: this.name,
					avatar_url: this.avatar_url,
					content: message
				})
				.then(() => console.log('Sent that!'))
		}
		if (!message && isEmpty(this.message.embeds[0])) throw new EmptyEmbed('main.js')
		fetch.post(this.webhook)
			.send(this.message)
			.then(() => console.log('Sent that!'))
			.catch(console.error)
	}
}
