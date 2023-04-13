import React from "react";
import { game } from "./GameGrid";
import { Card } from "@chakra-ui/react";

interface Props {
    game: game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image src={game.background_image} />
        </Card>
    );
};

export default GameCard;
