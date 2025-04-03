/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Box, Code, Flex } from "@chakra-ui/react";

const Titlename = () => {
  const messages = [
    "Frontend Developer",
    "Javascript Developer",
    "React Js Developer",
    "Typescript Developer",
    "Web Designer",
    "Java Developer",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Flex w={"100%"}>
      {/* <Code
        fontSize={{ md: "3xl" }}
        fontWeight="bold"
        color={"#e4bb68"}
        bg={"none"}
        display={{ base: "none", md: "block" }}
      >
        <span style={{ color: "#268BD2" }}>Console.log</span>(
        <span style={{ color: "#33FFCC" }}>&quot;</span>
      </Code> */}
      <Box
        position="relative"
        width={{ xl: "50%", lg: "80%", md: "400px", base: "100%" }}
        height={{ base: "40px", md: "50px" }}
        overflow="hidden"
        display="flex"
        // justifyContent="center"
        // alignItems="center"
      >
        {messages.map((message, index) => (
          <Code
            key={index}
            position="absolute"
            top={
              currentIndex === index
                ? "0"
                : currentIndex > index
                ? "-100%"
                : "100%"
            }
            opacity={currentIndex === index ? 1 : 0}
            transition="all 0.8s linear"
            transform={
              currentIndex === index ? "translateY(0)" : "translateY(0)"
            }
            fontSize={{ md: "3xl", base: "23px" }}
            fontWeight="bold"
            color={"#33FFCC"}
            bg={"none"}
          >
            {message}
          </Code>
        ))}
      </Box>
      {/* <Code
        fontSize={{ md: "3xl" }}
        fontWeight="bold"
        color={"#e4bb68"}
        bg={"none"}
        display={{ base: "none", md: "block" }}
      >
        <span style={{ color: "#33FFCC" }}>&quot;</span>)
      </Code> */}
    </Flex>
  );
};

export default Titlename;
