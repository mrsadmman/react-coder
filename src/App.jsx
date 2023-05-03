import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { Container } from "@mui/material";

export default function App() {
  return (
    <>
      <NavBar />
      <Container sx={{ mt: 5 }}>
        <ItemListContainer greeting={"Bienvenidos"} />
      </Container>
    </>
  );
}
