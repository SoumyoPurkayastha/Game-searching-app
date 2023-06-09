import { Platform } from "../services/Hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
    FaWindows,
    FaXbox,
    FaPlaystation,
    FaLinux,
    FaApple,
    FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}

const PlatformIconMap = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        linux: FaLinux,
        mac: FaApple,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe,
    };

    return (
        <>
            <HStack paddingTop={3}>
                {platforms.map((platform) => (
                    <Icon
                        key={platform.id}
                        as={iconMap[platform.slug]}
                        color={"gray.500"}
                    />
                ))}
            </HStack>
        </>
    );
};

export default PlatformIconMap;
