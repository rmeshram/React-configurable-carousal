import React from "react";

export default (props) => {
  const { text } = props || {};
  return (
    <div className="test-component">
      <span> {text} </span>
    </div>
  );
}