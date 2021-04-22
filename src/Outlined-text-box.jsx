import React, { useEffect } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <InputOutLinedTextBox
        type="text"
        placeholder="Outlined"
        value={""}
        classes={""}
      />
    </div>
  );
}

const InputOutLinedTextBox = props => {
  const { type, classes, value, placeholder } = props || {};

  const toggleClass = () => {
    const spanElem = document.querySelector("span");
    spanElem.classList.add("outLined-text");
    document.querySelector(".input-outlined-textbox").placeholder = "";
  }
  const onClickOutsideTextBox = event => {
    if (event.target.className === "input-outlined-textbox") return;
    const spanElem = document.querySelector("span");
    spanElem.classList.remove("outLined-text");
    document.querySelector(
      ".input-outlined-textbox"
    ).placeholder = placeholder;
  }

useEffect(() => {
  document.addEventListener("click", onClickOutsideTextBox);
  return () => {
    document.removeEventListener("click")
  }
}, []);

return (
  <div>
    <span> </span>
    <input
      type={type}
      className={"input-outlined-textbox"}
      value={value}
      placeholder={placeholder}
      onClick={toggleClass}
    />
  </div>
);
};
