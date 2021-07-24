import React, { useEffect, useState } from 'react';
import events from '../../../utils/events';
import { subscribeEvent, unsubscribeEvent } from '../../../utils/pub-sub';

import './Overlay.css';

export default function Overlay() {
	const [showOverlay, setShowOverlay] = useState(false);

	useEffect(() => {
		const fn = subscribeEvent(events.SHOW_OVERLAY, function (showOverlay) {
			setShowOverlay(showOverlay);
		});
		return function () {
			unsubscribeEvent(events.SHOW_OVERLAY, fn);
		};
	}, []);

	return (
		<div className={`pA max-dims overlay ${showOverlay ? '' : 'dn'}`} />
	);
}
