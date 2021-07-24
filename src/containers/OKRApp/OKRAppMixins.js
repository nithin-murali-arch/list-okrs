export function processOKRs(okrs = []) {
	const okrMap = {};
	const filtersMap = {};
	okrs.filter((okr) => !okr.parent_objective_id).forEach((okr) => {
		okrMap[okr.id] = okr;
		okr.children = [];
		filtersMap[okr.category] = true;
	});
	okrs.filter((okr) => okr.parent_objective_id).forEach((okr) => {
		const parent = okrMap[okr.parent_objective_id];
		if (parent) {
			parent.children.push(okr);
		}
		filtersMap[okr.category] = true;
	});
	let filters = Object.keys(filtersMap);
	filters.sort();
	filters = filters.map((filter) => ({
		key: filter,
		label: filter,
	}));
	filters.unshift({
		key: '',
		label: 'Select a filter',
	});
	return {
		okrs: Object.values(okrMap),
		filters,
	};
}
