/* eslint-disable no-unused-vars */
import React from "react";
import Dropdown from "./components/dropdown";
import "./App.css"; // Import the CSS file

const options = [
  { label: "Selected Option", value: "option1" },
  { label: "Default Option", value: "option2" },
  { label: "Hovered Option", value: "option3" },
  { label: "Disabled Option", value: "option4", disabled: true },
  { label: "Text values", value: "option5" },
  { label: "Icon and Text", value: "option6", icon: "bi bi-journal-bookmark" },
];

const App = () => {
  const handleSelect = (option) => {
    console.log("Selected:", option);
  };

  return (
    <div>
      <h1>Reusable Dropdown</h1>
      <Dropdown options={options} onSelect={handleSelect} searchable={true} direction="down" placeholder="Select an option" defaultSelected={options[1]} />
    </div>
  );
};

export default App;