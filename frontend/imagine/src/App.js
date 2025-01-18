import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import './App.css';
import lightTheme from "./Theme";


function App() {

 
  return (
    <div className="App">
      
       <ThemeProvider theme={lightTheme}>
        <UsernameProvider>
       <EmailProvider>
         <Router> 
          <Routes>
            <Route path="/scoperecommendations" element={<ScopeReco />} /> 
            <Route path="/materialrecommendations" element={<Recommendations/>} /> 
            <Route path="/teacherDashboard" element={<TeacherDashboard />} />
            <Route path="/studentDashboard" element={<StudentDashboard />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        </EmailProvider>
        </UsernameProvider>
        </ThemeProvider>
        
    </div>
  );
}

export default App;
