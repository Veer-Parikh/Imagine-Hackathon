import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { useTheme } from "./Theme/ThemeProvider";
import SideNavbar from "./Components/SideNavbar";
import ChatBot from "./Components/ChatBot";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/Account";

function App() {
  const { isDarkTheme } = useTheme();

  return (
    <Router>
      <div style={{ display: "flex", width: "100%" }}>
        {/* Sidebar with border on the right */}
        <div style={{ width: "18vw", borderRight: "1px solid #ccc" }}>
          <SideNavbar />
        </div>

        {/* Main content with border on both sides */}
        <div
          style={{
            width: "55vw",
            display: "flex",
            flexDirection: "column",
            borderLeft: "0.5px solid #ccc",
            borderRight: "0.5px solid #ccc",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </div>

        {/* ChatBot section */}
        <div style={{ width: "27vw", borderLeft: "1px solid #ccc" }}>
          <ChatBot />
        </div>
      </div>
    </Router>
  );
}

export default App;
