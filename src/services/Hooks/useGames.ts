import { GameQuery } from "../../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
}

const useGames = (gameQuery: GameQuery) =>
    useData<game>("/games", { params: { genres: gameQuery.genre?.id } }, [
        gameQuery,
    ]);

export default useGames;
