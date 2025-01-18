import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Grid from "@mui/material/Grid2";
import { ThemeProvider } from "@mui/material";
import HomePage from "./Pages/HomePage";
import lightTheme from "./Theme";
import SideNavbar from "./Components/SideNavbar";
import Chat from "./Components/Chat";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <Router>
          <Grid container xs={3}>
            {/* Side Navbar */}
            <Grid item>
              <SideNavbar />
            </Grid>

            {/* Main Content */}
            <Grid item xs={6}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Add additional routes here */}
              </Routes>
            </Grid>

            {/* Chat */}
            <Grid item xs={3}>
              <Chat />
            </Grid>
          </Grid>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
