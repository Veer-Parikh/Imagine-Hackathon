// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import React, { useState } from "react";
// import { useTheme } from "../Theme/ThemeProvider";
// import SideNavbar from "../Components/SideNavbar";
// import ChatBot from "../Components/ChatBot";
// import HomePage from "../pages/HomePage";
// import AccountPage from "../pages/Account";
// import SignUp from "../Auth/SignUp";

// function Login() {
//   const { isDarkTheme } = useTheme();

//   // State to track if the user is logged in
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // A private route component to protect routes
//   const PrivateRoute = ({ children }) => {
//     return isLoggedIn ? children : <Navigate to="/signup" replace />;
//   };

//   return (
//     <Router>
//       <div style={{ display: "flex", width: "100%" }}>
//         {/* Sidebar with border on the right */}
//         <div style={{ width: "18vw", borderRight: "1px solid #ccc" }}>
//           <SideNavbar />
//         </div>

//         {/* Main content with border on both sides */}
//         <div
//           style={{
//             width: "55vw",
//             display: "flex",
//             flexDirection: "column",
//             borderLeft: "0.5px solid #ccc",
//             borderRight: "0.5px solid #ccc",
//           }}
//         >
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/signup" element={<SignUp />} />

//             {/* Private Routes */}
//             <Route
//               path="/"
//               element={
//                 <PrivateRoute>
//                   <HomePage />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/account"
//               element={
//                 <PrivateRoute>
//                   <AccountPage />
//                 </PrivateRoute>
//               }
//             />
//           </Routes>
//         </div>

//         {/* ChatBot section */}
//         <div style={{ width: "27vw", borderLeft: "1px solid #ccc" }}>
//           <ChatBot />
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default Login;