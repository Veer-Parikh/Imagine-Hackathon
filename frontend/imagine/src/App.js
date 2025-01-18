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


function App() {

 
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <Router> 
          <div style={{display:'flex', width: '100%'}}>
            <div style={{width:'20vw'}}>
              <SideNavbar />
            </div>
            <div style={{width:'60vw', display: 'flex', flexDirection: 'column',}}>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
            </div>

            <div style={{width:'20vw'}}>
              <SideNavbar />
            </div>

          </div>
        
         
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;