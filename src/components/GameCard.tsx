import React from "react";
import { game } from "../services/Hooks/useGames";
import { Card, Heading, Image, CardBody, Text } from "@chakra-ui/react";
import PlatformIconMap from "./PlatformIconMap";
import getCroppedImageURL from "../services/image-url";

interface Props {
    game: game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={25} overflow={"hidden"} size="md">
            <Image src={getCroppedImageURL(game.background_image, 600, 400)} />
            <CardBody>
                <Heading size={"md"}>{game.name}</Heading>
                <PlatformIconMap
                    platforms={game.parent_platforms.map((p) => p.platform)}
                />
            </CardBody>
        </Card>
    );
};

export default GameCard;
