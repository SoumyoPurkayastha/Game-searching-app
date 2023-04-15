import React from "react";
import { game } from "../services/Hooks/useGames";
import { Card, Heading, Image, CardBody, Text } from "@chakra-ui/react";
import PlatformIconMap from "./PlatformIconMap";

interface Props {
    game: game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={25} overflow={"hidden"} colorScheme="red" size="md">
            <Image src={game.background_image} />
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
