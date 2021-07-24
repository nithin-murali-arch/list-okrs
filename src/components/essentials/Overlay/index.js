import React, { useEffect, useState } from 'react';
import events from '../../../utils/events';
import { publishEvent, subscribeEvent, unsubscribeEvent } from '../../../utils/pub-sub';

import './Overlay.scss';

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

	function handleClose() {
		const dependentEvents = [events.SHOW_POPUP];
		dependentEvents.forEach((event) => {
			publishEvent(event, false);
		});
	}

	return (
		<div onClick={handleClose} className={`pA max-dims overlay ${showOverlay ? '' : 'dn'}`} />
	);
}
