const eventsMap = {};

export function publishEvent(event, ...args) {
	const events = eventsMap[event];
	if (events && events.length) {
		events.forEach(function (callback) {
			callback(...args);
		});
	} else {
		// eslint-disable-next-line no-console
		console.warn(`${event} has not been created/subscribed to!`);
	}
}

export function subscribeEvent(event, callback) {
	if (!eventsMap[event]) {
		eventsMap[event] = [];
	}
	eventsMap[event].push(callback);
	return callback;
}

export function unsubscribeEvent(event, callback) {
	const events = eventsMap[event];
	if (!events || !events.length) {
		return;
	}
	const index = events.findIndex((item) => item === callback);
	events.splice(index, 1);
}
