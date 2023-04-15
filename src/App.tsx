import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./services/Hooks/useGenres";

function App() {
    let [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
                        <GenreList
                            selectedGenre={selectedGenre}
                            onSelectGenre={(genre) => setSelectedGenre(genre)}
                        />
                    </GridItem>
                </Show>
                <GridItem area={"main"}>
                    <GameGrid selectedGenre={selectedGenre} />
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;
