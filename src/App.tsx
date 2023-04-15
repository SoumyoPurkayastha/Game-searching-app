import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./services/Hooks/useGenres";

export interface GameQuery {
    genre: Genre | null;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <div className="App">
            <Grid
                templateAreas={{
                    md: `"nav nav" "aside main"`,
                    base: `"nav" "main"`,
                }}
            >
                <GridItem area={"nav"}>
                    <NavBar
                        onSearch={(searchText) =>
                            setGameQuery({ ...gameQuery, searchText })
                        }
                    />
                </GridItem>
                <Show above="md">
                    <GridItem area={"aside"} padding={5}>
                        <GenreList
                            selectedGenre={gameQuery.genre}
                            onSelectGenre={(genre) =>
                                setGameQuery({ ...gameQuery, genre })
                            }
                        />
                    </GridItem>
                </Show>
                <GridItem area={"main"}>
                    <GameGrid gameQuery={gameQuery} />
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;
