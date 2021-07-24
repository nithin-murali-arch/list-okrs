import React from 'react';
import PropTypes from 'prop-types';
import OKRNode from '../OKRNode';

import './OKRList.scss';

export default function OKRList(props) {
	const { okrs } = props;
	return (
		<div className="okr-list-ctr flex--column">
			{
				okrs.map((okr, index) => (
					<OKRNode index={index + 1} okr={okr} key={okr.id} />
				))
			}
		</div>
	);
}

OKRList.propTypes = {
	okrs: PropTypes.array,
};
