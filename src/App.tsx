import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

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
                    <GridItem area={"aside"} padding={5}>
                        <GenreList></GenreList>
                    </GridItem>
                </Show>
                <GridItem area={"main"}>
                    <GameGrid />
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;
