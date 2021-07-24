import React, { useEffect, useState } from 'react';
import events from '../../../utils/events';
import { publishEvent, subscribeEvent, unsubscribeEvent } from '../../../utils/pub-sub';

import './LoadingIndicator.css';

export default function LoadingIndicator() {
	const [showLoading, setShowLoading] = useState(false);

	useEffect(() => {
		const fn = subscribeEvent(events.API_LOADING, function (showLoading) {
			setShowLoading(showLoading);
			publishEvent(events.SHOW_OVERLAY, showLoading);
		});
		return function () {
			unsubscribeEvent(fn);
		};
	}, []);

	return (
		<div className={`pA loadingio-spinner ${showLoading ? '' : 'dn'}`}>
			<div className="ldio-4hpbfjnx0hb">
				<div />
			</div>
		</div>
	);
}
