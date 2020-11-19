export class Room {
	/**
	 * @type {{room: Room, validator: () => string}[]}
	 */
	roomConnections = []

	constructor(name) {
		/**
		 * @type {string}
		 */
		this.name = name
	}

	addConnection(room, validator) {
		this.roomConnections.push({
			room,
			validator
		})
	}
}