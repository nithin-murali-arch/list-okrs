import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { publishEvent, subscribeEvent } from '../../../utils/pub-sub';
import events from '../../../utils/events';

export default function Modal() {
	const [showPopup, setShowPopup] = useState(false);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState();

	useEffect(() => {
		subscribeEvent(events.SHOW_POPUP, function (show, title, body) {
			publishEvent(events.SHOW_OVERLAY, show);
			setTitle(title);
			setBody(body);
		});
	}, []);

	function handleClose() {
		const action = !showPopup;
		setShowPopup(action);
		publishEvent(events.SHOW_OVERLAY, action);
	}

	return (
		<div className={`modal pA flex--column ${showPopup ? '' : 'dn'}`}>
			<div className="modal-title">
				<div className="title-field">{title}</div>
				<div className="close cp" onClick={handleClose}><AiOutlineClose /></div>
			</div>
			<div className="modal-body">
				{body}
			</div>
		</div>
	);
}
