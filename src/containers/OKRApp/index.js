/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OKRList from '../../components/OKRs/OKRList';
import axiosWrapper from '../../utils/axios-wrapper';
import URLS from '../../utils/urls';
import { processOKRs } from './OKRAppMixins';

import './OKRApp.scss';

export default function OKRApp() {
	const [okrs, setOKRs] = useState([]);
	const [availableFilters, setAvailableFilters] = useState([]);
	const [currentFilter, setCurrentFilter] = useState('');
	const [filteredOKRs, setFilteredOKRs] = useState([]);

	useEffect(() => {
		async function loadOKRs() {
			const response = await axiosWrapper.get(URLS.GET_OKR_LIST);
			const { okrs, filters } = processOKRs(response.data);
			setOKRs(okrs);
			setFilteredOKRs(okrs);
			setAvailableFilters(filters);
		}
		loadOKRs();
	}, []);

	useEffect(() => {
		if (currentFilter) {
			const okrCopy = [...okrs];
			const result = okrCopy.filter((okr) => {
				if (okr.category === currentFilter) {
					okr.children = okr.children.filter((child) => child.category === currentFilter);
					return true;
				}
				return false;
			});
			setFilteredOKRs(result);
		} else {
			setFilteredOKRs(okrs);
		}
	}, [currentFilter]);

	return (
		<div className="okr-ctr flex--column">
			<select
				placeholder="Choose a filter"
				className="filter-okrs"
				value={currentFilter}
				onChange={(event) => {
					setCurrentFilter(event.target.value);
				}}
			>
				{
					availableFilters.map((filter) => (
						<option key={filter.key} value={filter.key}>{filter.label}</option>
					))
				}
			</select>
			<OKRList okrs={filteredOKRs} />
		</div>
	);
}
