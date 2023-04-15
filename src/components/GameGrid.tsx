import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../services/Hooks/useGames";
import { Genre } from "../services/Hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error } = useGames(gameQuery);

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                padding={10}
                spacing={4}
                overflow="hidden"
            >
                {data.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
