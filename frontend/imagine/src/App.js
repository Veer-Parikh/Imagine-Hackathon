import { BrowserRouter , Routes, Route } from "react-router-dom"; 
import './App.css';


import HomePage from "./pages/HomePage";
import Navbar from "./Components/TopNavbar";


function App() {

 
  return (
    
      
      
        
         <BrowserRouter> 
          <Routes>
            
            <Route path="/" element={<Navbar />} />

          </Routes>
        </BrowserRouter>
       

  );
}

export default App;