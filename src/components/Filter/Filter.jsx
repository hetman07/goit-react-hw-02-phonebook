import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ value, onChangeFilter }) {
return (
    <div>
    <input 
    className="TaskEditor-input" 
    type="text"
    value={value} 
    onChange={e => onChangeFilter(e.target.value)} 
    data-row="filter" 
    />
    </div>
);
}

