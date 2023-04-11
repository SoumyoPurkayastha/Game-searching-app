import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent={"space-between"} padding={"10px"}>
        <div>
          <HStack>
            <Image src={logo} boxSize={"70px"} />
            <Text>Home</Text>
          </HStack>
        </div>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
