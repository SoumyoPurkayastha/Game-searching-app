import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Grid
        templateAreas={{
          md: `"nav nav" "aside main"`,
          base: `"nav" "main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="md">
          <GridItem area={"aside"} bg={"#319795"}>
            Aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"#D53F8C"}>
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
