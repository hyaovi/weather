import React from "react";

function DateDisplayer(props) {
  const now = new Date().toDateString();
  return (
    <div>
      <h3>
        <small className="text-muted"> {now}</small>{" "}
        <span>
          {props.city} {props.countryCode}
        </span>
      </h3>
    </div>
  );
}

export default DateDisplayer;
