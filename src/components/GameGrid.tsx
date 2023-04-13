import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface game {
    id: number;
    name: string;
}

interface fetchResponse {
    count: number;
    results: game[];
}

const GameGrid = () => {
    const [games, setGames] = useState<game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
            .get<fetchResponse>("/games")
            .then((res) => setGames(res.data.results))
            .catch((err) => setError(err.message));
    });

    return (
        <>
            {error && <p>{error}</p>}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    );
};

export default GameGrid;
