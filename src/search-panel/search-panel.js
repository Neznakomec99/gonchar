import React from 'react';
import ItemStatusFilter from '../item-status-filter';

import './search-panel.css';
const SearchPanel = () =>{
	return (
	<div className="search-panel d-flex">
		<input className="form-control search-input" type="text" placeholder="type to search" aria-label="Search"/>
		<ItemStatusFilter />
	</div>
	);
};


export default SearchPanel;