import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Notes from "./components/Notes";
import Settings from "./components/Settings";
import { useContext } from "react";
import { UserPreferencesContext } from "./context/UserPreferencesContext ";

function App() {
  const {
    preference: { fontSize, theme },
  } = useContext(UserPreferencesContext);

  return (
    <div className={`App ${fontSize} ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
