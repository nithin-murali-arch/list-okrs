import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai';
import { getNumberString } from '../../../utils';

import './OKRNode.scss';
import { showPopup } from './OKRNodeMixins';

export default function OKRNode(props) {
	const {
		okr, index, isChild, parent,
	} = props;

	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="okr-node flex--column cp">
			<div className="flex--row-ac">
				{
					!isChild && okr.children && okr.children.length ? (
						<div className="icon-ctr cp" onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? (
								<AiFillCaretDown />
							) : (
								<AiFillCaretRight />
							)}
						</div>
					) : null
				}
				<div className="okr-index">
					{isChild ? getNumberString(index) : index}
					.
				</div>
				<div onClick={() => showPopup(okr, parent)} className="okr-title">{okr.title}</div>
			</div>

			{
				okr.children && okr.children.length ? (
					<div className={`okr-children ${isOpen ? '' : 'hide'}`}>
						{
							okr.children.map((okrChild, index) => (
								<OKRNode
									key={okrChild.id}
									okr={okrChild}
									index={index}
									parent={okr}
									isChild
								/>
							))
						}
					</div>
				) : null
			}
		</div>
	);
}

OKRNode.propTypes = {
	okr: PropTypes.object,
	isChild: PropTypes.bool,
	index: PropTypes.number,
	parent: PropTypes.object,
};
