import { BrowserRouter as Router, Routes } from "react-router-dom"; 
import {Route} from "react-router";
import './App.css';
import { ThemeProvider } from "@mui/material";
import HomePage from "./pages/HomePage";
import lightTheme from "./Theme";
import SideNavbar from "./Components/SideNavbar";
import PostCard from "./Components/PostCard";
import AddPostcard from "./Components/AddPostcard";
import AccountPage from "./pages/Account";
import Grid from "@mui/material/Grid2";
import ChatBot from "./Components/ChatBot";


function App() {

 
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <Router> 
          <div style={{display:'flex', width: '100%'}}>
            <div style={{width:'18vw'}}>
              <SideNavbar />
            </div>
            <div style={{width:'63vw', display: 'flex', flexDirection: 'column',}}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/account" element={<AccountPage />} />
            </Routes>
            </div>
            <div style={{width:'18vw'}}>
              <ChatBot />
            </div>
          </div>
        
         
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;