import React from "react";
import { game } from "../services/Hooks/useGames";
import { Card, Heading, Image, CardBody } from "@chakra-ui/react";

interface Props {
    game: game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={25} overflow={"hidden"} colorScheme="red" size="md">
            <Image src={game.background_image} />
            <CardBody>
                <Heading>{game.name}</Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;
