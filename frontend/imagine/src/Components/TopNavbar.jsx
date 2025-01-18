import {React , useState, useContext} from "react";
// import dropdown from "../pics/icons8-drop-down-50.png";
// import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';
// import { AuthContext } from '../Login_Signup/AuthProvider';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import TextField from '@mui/material/TextField';
// import SearchIcon from '@mui/icons-material/Search';
// import { Button, Grid } from "@mui/material";
// import logo from '../pics/black white Shop logo.png';

const Navbar = ({cartItems, onSearch}) => {

  const authContext = useContext(AuthContext);
  const {loginSuccess , username, isAuthenticated} = authContext;
  const {logout} = authContext;
  const navigate = useNavigate();
  const [dropdownVisible , setDropdownVisible] = useState(false);
  
  const handleDropdownVisibility = () => {
    console.log('dropdown triggered');
    setDropdownVisible(!dropdownVisible);
  }

  const handleLogout = () => {
    logout();
    Swal.fire({
      icon: 'success',
      title: 'See you soon!',
      text: ' You have been successfully logged out!',
    });
    navigate('/');
    setDropdownVisible(false);
    console.log('logged out');
  }

  const handleKeyPress = (event) => {
    if(event.key==='Enter')
    {
      handleSearch(event);
    }
  };

  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
   
    <Grid container alignItems="center" justifyContent="space-between">
    <Grid item>
      <Link to="/">
    <img src={logo} style={{width:'170px', marginTop:'10px'}} />
    </Link>
    </Grid>
  
    <Grid item>
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          value={searchQuery}
          style={{}}
          onKeyDown={handleKeyPress}
          InputProps={{
            style: { padding: '1px' ,width:'570px', border:'32px', borderColor:'#212A3E', borderRadius:'20px', backgroundColor:'#F1F6F9' }
          }}
        />
    </Grid>
    
      <Grid item>
        <Button>
        <Link to={`/cart?items=${JSON.stringify(cartItems)}`} style={{color:"#ffffff" , textDecoration:"none"}}>
        <BsCart2 className="navbar-cart" />
        </Link>
        </Button>
        {
          loginSuccess 
          ? (<span><button className="wel-text" onClick={handleDropdownVisibility}>Welcome {username} <img src={dropdown} className="drop" /></button>
            {dropdownVisible && 
            (<div >
              <Button>Your Account</Button>
              <Button onClick={handleLogout}>Logout</Button>
            </div>)
            }
            </span>)
          : (<Button><Link to={"/login"} style={{color:"#ffffff" , textDecoration:"none"}}>Login / SignUp</Link></Button>)
        }
      </Grid>
      

   </Grid>
  );
};

export default Navbar;