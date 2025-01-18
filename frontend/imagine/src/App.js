import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import './App.css';


function App() {

 
  return (
    <div className="App">
      
       <ThemeProvider theme={fontcolorTheme}>
        <UsernameProvider>
       <EmailProvider>
         <Router> 
          <Routes>
            <Route path="/scoperecommendations" element={<ScopeReco />} /> 
            <Route path="/materialrecommendations" element={<Recommendations/>} /> 
            <Route path="/teacherDashboard" element={<TeacherDashboard />} />
            <Route path="/studentDashboard" element={<StudentDashboard />} />
            <Route path="/addstudents" element={<AddStudents />} />
            <Route path="/addmaterial" element={<AddMaterial/>} />
            <Route path="/quiz" element={<Quiz/>} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/loginTeacher" element={<LoginTeacher/>} />
            <Route path="/signupTeacher" element={<SignUpTeacher/>} />
            <Route path="/loginStudent" element={<LoginStudent/>} />
            <Route path="/signupStudent" element={<SignUpStudent/>} />
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
