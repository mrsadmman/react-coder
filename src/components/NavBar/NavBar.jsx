import { AppBar, Button, IconButton, Toolbar, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

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

export default NavBar;