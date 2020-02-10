import React from 'react';
import PropTypes from 'prop-types';

const Picker = ({cityList, onChange}) => (                
    <select onChange={(e) => onChange(e.target.value)}>
    {cityList.map((item, index) => <option key={item.id} value={index}>{item.name}</option>)}
    </select>
)

Picker.propTypes = {
    cityList: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired, name: PropTypes.string.isRequired})).isRequired,
    onChange: PropTypes.func.isRequired
}

export default Picker;