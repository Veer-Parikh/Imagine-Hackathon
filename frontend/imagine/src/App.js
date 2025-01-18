import { BrowserRouter as Router, Routes } from "react-router-dom"; 
import {Route} from "react-router";
import './App.css';
import { ThemeProvider } from "@mui/material";
import HomePage from "./pages/HomePage";
import lightTheme from "./Theme";
import SideNavbar from "./Components/SideNavbar";


function App() {

 
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <Router> 
         <SideNavbar/>
          <Routes>
            
            <Route path="/" element={<PostCard />} />

          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;