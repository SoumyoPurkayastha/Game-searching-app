import { Button, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <>
            <HStack padding={"10px"}>
                <button onClick={() => window.location.reload()}>
                    <Image src={logo} boxSize={"80px"} overflow={"visible"} />
                </button>
                <SearchBox onSearch={onSearch} />
                <ColorModeSwitch />
            </HStack>
        </>
    );
};

export default NavBar;
