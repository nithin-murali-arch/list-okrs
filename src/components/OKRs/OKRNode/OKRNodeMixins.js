/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from 'react';
import events from '../../../utils/events';
import { publishEvent } from '../../../utils/pub-sub';

function generateOKRFields(okr) {
	const okrCopy = { ...okr };
	const { title } = okrCopy;
	delete okrCopy.title;
	return (
		<div className="okr-popup-grid">
			<div className="okr-grid-field title">
				<div className="label">Title</div>
				{/* Harcoding title so that it appears first */}
				<div className="value">{title}</div>
			</div>
			{
				Object.entries(okrCopy).map(([key, value]) => (
					<div className="grid-field" key={`${okr.id}_${okr.key}`}>
						<div className="label">snakeCaseToWord(key)</div>
						<div className="value">{value}</div>
					</div>
				))
			}
		</div>
	);
}

export function showPopup(okr, parent) {
	debugger;
	const body = (
		<div className="okr-popup-body">
			{
				parent ? (
					<div className="okr-parent">
						{generateOKRFields(parent)}
					</div>
				) : null
			}
			<div className="current-okr">
				{generateOKRFields(okr)}
			</div>
		</div>
	);
	publishEvent(events.SHOW_POPUP, okr.title, body);
}
