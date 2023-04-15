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

const useGames = (selectedGenre: Genre | null) =>
    useData<game>("/games", { params: { genres: selectedGenre?.id } }, [
        selectedGenre?.id,
    ]);

export default useGames;
