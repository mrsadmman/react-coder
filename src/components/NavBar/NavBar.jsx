import { AppBar, Button,  Toolbar } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <AppBar position="static" color="success">
        <Toolbar>
          <Button color="inherit" component={Link} to={"/"}>
            Finas Bebidas
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
          <Button color="inherit" component={Link} to={"/cart"}>
            <AddShoppingCartIcon>
              <CartWidget />
            </AddShoppingCartIcon>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
