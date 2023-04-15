import useData from "./useData";

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

const useGames = () => useData<game>("/games");

export default useGames;
