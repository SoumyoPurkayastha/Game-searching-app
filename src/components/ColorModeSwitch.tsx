import React from "react";
import { HStack, Icon, Switch, Text, useColorMode } from "@chakra-ui/react";
import { MdOutlineNightlight } from "react-icons/md";

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <HStack>
            <Switch
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
            />
            <MdOutlineNightlight />
        </HStack>
    );
};

export default ColorModeSwitch;
