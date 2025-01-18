import { BrowserRouter , Routes } from "react-router-dom"; 
import { Route } from "react-router-dom";
import './App.css';


import HomePage from "./pages/HomePage";
import Navbar from "./Components/TopNavbar";
import PostCard from "./Components/PostCard";


function App() {

 
  return (
    
      
      
        
         <BrowserRouter> 

          <Routes>
            
            <Route path="/" element={<PostCard />} />

          </Routes>
        </BrowserRouter>
       

  );
}

export default App;