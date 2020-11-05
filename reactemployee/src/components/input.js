import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Inputter(props) {
  return (
        <input
          value={props.filter}
          onChange={props.onChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="search"
          id="term"
        />

  );
}

export default Inputter;