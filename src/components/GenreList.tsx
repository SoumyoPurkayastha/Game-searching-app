import React from "react";
import useGenres from "../services/Hooks/useGenres";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageURL from "../services/image-url";

const GenreList = () => {
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
                        <Text>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
