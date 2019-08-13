class EmptyEmbed extends Error {
	constructor(file = null) {
		super('Failed to send Request: Cannot send an empty embed.', file)
		this.name = this.constructor.name
		this.file = file
	}

	statusCode() {
		return this.status
	}
}
class EmptyMessage extends Error {
	constructor(file = null) {
		super('Failed to send Request: Cannot send an empty message.', file)
		this.name = this.constructor.name
		this.file = file
	}

	statusCode() {
		return this.status
	}
}

module.exports = {
	EmptyEmbed,
	EmptyMessage
}