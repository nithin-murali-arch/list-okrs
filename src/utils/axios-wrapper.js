import axios from 'axios';
import events from './events';
import { publishEvent } from './pub-sub';

const axiosWrapper = {};

function makeRequest(method, ...args) {
	publishEvent(events.API_LOADING, true);
	performance.mark('api-start');
	return axios[method](...args).then((res) => {
		publishEvent(events.API_LOADING, false);
		performance.mark('api-end');
		performance.measure('api-timing', 'api-start', 'api-end');
		return res.data;
	}).catch((err) => {
		// eslint-disable-next-line no-console
		console.error(err);
		publishEvent(events.API_LOADING, false);
		performance.mark('api-end');
		performance.measure('api-timing', 'api-start', 'api-end');
	});
}

axiosWrapper.get = function (...args) {
	return makeRequest('get', ...args);
};

export default axiosWrapper;
