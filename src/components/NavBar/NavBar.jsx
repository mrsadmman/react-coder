import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>E - COMMERCE</h3>
      </Link>
      <div className="Categories">
        <NavLink
          to={`/category/celular`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Celulares
        </NavLink>
        <NavLink
          to={`/category/tablet`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Tablets
        </NavLink>
        <NavLink
          to={`/category/notebook`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Notebooks
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
/* import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static" color="success">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Mi Tienda
          </Typography>
          <Button color="inherit">Boton 1</Button>
          <Button color="inherit">Boton 2</Button>
          <IconButton>
          <AddShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <NavListDrawer />
      </Drawer>
    </>
  );
}
 */
