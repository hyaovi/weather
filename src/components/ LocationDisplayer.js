import React from 'react';

function LocationDisplayer(props) {
  const now = new Date().toDateString();
  return (
    <div>
      <h2 className=" display-3">
        {props.city} {props.countryCode}
      </h2>
      <small className="text-dark"> {now}</small>
    </div>
  );
}

export default LocationDisplayer;
