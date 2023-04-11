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
          <GridItem area={"aside"} bg={"yellow"}>
            Aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"blue"}>
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
