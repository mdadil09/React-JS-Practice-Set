import React, { useContext, useState } from "react";
import { UserPreferencesContext } from "../context/UserPreferencesContext ";

const Settings = () => {
  const { data, handlePref } = useContext(UserPreferencesContext);
  return (
    <div>
      <h1>Preference Form</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ marginTop: "100px", padding: "15px" }}>
          <label style={{ fontSize: "32px" }}>Font Size: </label>
          <select
            name="Font Size"
            onChange={(e) => {
              handlePref(e.target.value, "font-size");
            }}
          >
            {data.fontSize.map((size, i) => {
              return (
                <option value={size} key={i}>
                  {size}
                </option>
              );
            })}
          </select>
        </div>
        <div style={{ marginTop: "100px" }}>
          <label style={{ fontSize: "32px" }}>Theme: </label>
          <select
            name="Font Size"
            onChange={(e) => {
              handlePref(e.target.value, "theme");
            }}
          >
            {data.theme.map((theme, i) => {
              return (
                <option value={theme} key={i}>
                  {theme}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
