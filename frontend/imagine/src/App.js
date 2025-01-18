import { BrowserRouter as Router, Routes } from "react-router-dom"; 
import { Route } from "react-router";
import './App.css';
import { ThemeProvider } from "@mui/material";
import HomePage from "./pages/HomePage";
import lightTheme from "./Theme";
import SideNavbar from "./Components/SideNavbar";
import ChatBot from "./Components/ChatBot";
import AccountPage from "./pages/Account";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <Router> 
          <div style={{ display: 'flex', width: '100%' }}>
            {/* Sidebar with border on the right */}
            <div style={{ width: '18vw', borderRight: '1px solid #ccc' }}>
              <SideNavbar />
            </div>
            
            {/* Main content with border on both sides */}
            <div
              style={{
                width: '62vw',
                display: 'flex',
                flexDirection: 'column',
                borderLeft: '0.5px solid #ccc',
                borderRight: '0.5px solid #ccc',
              }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/account" element={<AccountPage />} />
              </Routes>
            </div>

            {/* ChatBot section */}
            <div style={{ width: '19vw', borderLeft: '1px solid #ccc' }}>
              <ChatBot />
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
