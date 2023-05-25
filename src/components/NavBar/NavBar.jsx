import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <AppBar position="static" color="success">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Button color="inherit" component={Link} to={"/"}>
            Mi Tienda
          </Button>
          <Button color="inherit" component={Link} to={"/category/wine"}>
            Wine
          </Button>
          <Button color="inherit" component={Link} to={"/category/whisky"}>
            Whisky
          </Button>
          <Button color="inherit" component={Link} to={"/category/gin"}>
            Gin
          </Button>
          <IconButton>
            <AddShoppingCartIcon>
              <CartWidget />
            </AddShoppingCartIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
/*  return (
        
    
        <nav className='NavBar'>
            <NavLink variant="pills" to={'/'}>
            <h3>Tienda inJOGG</h3>
            </NavLink>
           
           <div className='Categories'>
                <NavLink to='/category/wine' activeclassName='ActiveOption'>
                    <h4>Wine</h4>
                </NavLink>
                <div></div>
                <NavLink to='/category/whisky' activeclassName='ActiveOption'>
                    <h4>Whisky</h4>
                </NavLink>
                <NavLink to='/category/gin' activeclassName='ActiveOption'>
                    <h4>Gin</h4>
                </NavLink>
            </div>
            <CartWidget />
        </nav>

) */

export default NavBar;
