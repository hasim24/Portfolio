/* eslint-disable react/prop-types */
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const TypewriterText = ({ text }) => {
  return (
    <Flex
      fontSize={{ lg: "4xl", md: "3xl", base: "2xl" }}
      fontWeight="bold"
      color="white"
    >
      {text?.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1.5, // Animation duration
              delay: i / 5,
            },
          }}
          viewport={{ once: true }}
          key={i}
          style={{
            display: "inline-block",
            color: i == 0 ? "#33FFCC" : "white",
            textTransform: "uppercase",
          }}
        >
          {el}
        </motion.span>
      ))}
    </Flex>
  );
};

export default TypewriterText;
