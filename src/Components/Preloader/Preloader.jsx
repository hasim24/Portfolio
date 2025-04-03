import "./preloader.css";
import { Flex } from "@chakra-ui/react";

const Preloader = () => {
  return (
    <Flex className="loader">
      <Flex className="orb"></Flex>
      <Flex className="wave"></Flex>
      <Flex className="wave"></Flex>
      <Flex className="wave"></Flex>
    </Flex>
  );
};

export default Preloader;
