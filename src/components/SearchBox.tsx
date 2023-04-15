import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <form
            style={{ width: "100%" }}
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) console.log(ref.current.value);
            }}
        >
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={ref}
                    borderRadius={10}
                    placeholder="Search games...."
                    variant="filled"
                ></Input>
                ;
            </InputGroup>
        </form>
    );
};

export default SearchBox;
