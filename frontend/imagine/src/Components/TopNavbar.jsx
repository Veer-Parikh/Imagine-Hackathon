import {React , useState, useContext} from "react";
// import dropdown from "../pics/icons8-drop-down-50.png";
// import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';
// import { AuthContext } from '../Login_Signup/AuthProvider';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
// import SearchIcon from '@mui/icons-material/Search';
import { Button, Grid2 } from "@mui/material";
// import Grid2 from "@mui/material";
// import logo from '../pics/black white Shop logo.png';

const Navbar = () => {

 
  return (
   
    <Grid2 container alignItems="center" justifyContent="space-between">
    <Grid2 item>
      <Link to="/">
    {/* <img src={logo} style={{width:'170px', marginTop:'10px'}} /> */}
    </Link>
    </Grid2>
  
    <Grid2 item>
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          // value={searchQuery}
          style={{}}
          // onKeyDown={handleKeyPress}
          InputProps={{
            style: { padding: '1px' ,width:'570px', border:'32px', borderColor:'#212A3E', borderRadius:'20px', backgroundColor:'#F1F6F9' }
          }}
        />
    </Grid2>
    
      <Grid2 item>
        <Button>
        
        </Button>
        {/* {
          loginSuccess 
          ? (<span><button className="wel-text" onClick={handleDropdownVisibility}>Welcome  <img src={dropdown} className="drop" /></button>
            {dropdownVisible && 
            (<div >
              <Button>Your Account</Button>
              <Button onClick={handleLogout}>Logout</Button>
            </div>)
            }
            </span>)
          : (<Button><Link to={"/login"} style={{color:"#ffffff" , textDecoration:"none"}}>Login / SignUp</Link></Button>)
        } */}
      </Grid2>
      

   </Grid2>

  );
};

export default Navbar;