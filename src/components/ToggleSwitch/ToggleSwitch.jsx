import React from "react";
import Switch from "react-switch"; // Adjust this import based on your switch library

const ToggleSwitch = ({
  handleToggleChange,
  selectedOption,
  slika1,
  slika2,
  option1,
  option2,
}) => (
  <Switch
    onChange={handleToggleChange}
    checked={selectedOption === option1}
    offColor="var(--secondaryColor)"
    onColor="var(--mainColor)"
    handleDiameter={24}
    handleColor="var(--mainColor)"
    uncheckedIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "100%",
          paddingLeft: "4px",
          backgroundColor: "var(--mainColor)", // Added background color
        }}
      >
        <img
          src={slika1}
          alt="Web Design"
          style={{ height: "24px", width: "auto" }}
        />
      </div>
    }
    checkedIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "100%",
          paddingRight: "15px",
          backgroundColor: "var(--mainColor)", // Added background color
        }}
      >
        <img
          src={slika2}
          alt="Automation"
          style={{ height: "24px", width: "auto" }}
        />
      </div>
    }
    height={24}
    width={48}
  />
);

export default ToggleSwitch;
