import React from "react";
import useGenres, { Genre } from "../services/Hooks/useGenres";
import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageURL from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data } = useGenres();
    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY={1}>
                    <HStack>
                        <Image
                            boxSize={8}
                            borderRadius={8}
                            src={getCroppedImageURL(
                                genre.image_background,
                                600,
                                400
                            )}
                        />
                        <Button
                            onClick={() => onSelectGenre(genre)}
                            fontSize={"lg"}
                            variant={"link"}
                            fontWeight={
                                genre.id === selectedGenre?.id
                                    ? "bold"
                                    : "normal"
                            }
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
