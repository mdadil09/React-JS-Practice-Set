import React from "react";

const Settings = () => {
  return (
    <div className="container">
      <h1>Preference Form</h1>
      <div
        className="select"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="select1"
          style={{ marginTop: "100px", padding: "15px" }}
        >
          <label style={{ fontSize: "32px" }}>Font Size: </label>
          <select name="Font Size">
            <option value="Small">Small</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="select2" style={{ marginTop: "100px" }}>
          <label style={{ fontSize: "32px" }}>Color Scheme: </label>
          <select name="Color Scheme">
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
