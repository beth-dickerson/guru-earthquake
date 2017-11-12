import React from 'react';
import TextField from 'material-ui/TextField';

const SearchField = (props) => {
  return (
    <div>
    <TextField
      id="text-field-controlled"
      value={props.value}
      onChange={props.handleSearchChange}
    />
    </div>
  )
}

export default SearchField;
