import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";

const NavBar = () => {
    return (
        <>
            <HStack padding={"10px"}>
                <Image src={logo} boxSize={"70px"} />
                <SearchBox />
                <ColorModeSwitch />
            </HStack>
        </>
    );
};

export default NavBar;
