import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useState, createContext, useContext } from "react";
import { useTheme } from "./Theme/ThemeProvider";
import SideNavbar from "./Components/SideNavbar";
import ChatBot from "./Components/ChatBot";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/Account";
import {SignUp} from "./Auth/SignUp";
import PrivateRoute from "./Auth/PrivateRoute";

// Create Auth Context
const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);


function App() {
  const { isDarkTheme } = useTheme();

  // Simulated authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>

      {isAuthenticated ?(<Router>
        <div style={{ display: "flex", width: "100%", height: "100vh", overflow: "hidden" }}>
          {/* Sidebar */}
          <div
            style={{
              width: "18vw",
              borderRight: "1px solid #ccc",
              position: "sticky",
              top: 0,
              height: "100vh",
              overflowY: "auto",
            }}
          >
            <SideNavbar />
          </div>

          {/* Main content */}
          <div
            style={{
              width: "55vw",
              display: "flex",
              flexDirection: "column",
              borderLeft: "0.5px solid #ccc",
              borderRight: "0.5px solid #ccc",
              overflowY: "auto",
            }}
          >
            <Routes>
              {/* Private Routes */}
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <HomePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/account"
                element={
                  <PrivateRoute>
                    <AccountPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>

          {/* ChatBot */}
          <div
            style={{
              width: "27vw",
              borderLeft: "1px solid #ccc",
              position: "sticky",
              top: 0,
              height: "100vh",
              overflowY: "auto",
            }}
          >
            <ChatBot />
          </div>
        </div>
      </Router>) : (
        
        <Router>
           <Routes>
              <Route path="/" element={<SignUp />} />
          </Routes>   
        </Router>

       )}


      
    </AuthContext.Provider>
  );
}

export default App;
