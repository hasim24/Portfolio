/* eslint-disable react/prop-types */
import {
  Flex,
  Text,
  Image,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
const ProjectCard = ({ title, description, image, stack }) => {


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0, // Slide in to its original position
        transition: {
          duration: 0.5, // Animation duration
          delay: 0.5,
        },
      }}
      viewport={{ once: true }}
    >
      <Flex
        w={{lg:"350px",md:"320px",base:"300px"}}
        flexDir={"column"}
        borderRadius="15px"
        pb={4}
        mb="1rem"
        h={"100%"}
        bg={"#1A1A1A"}
        alignItems={"center"}
      >
        {/* Hero Image */}
        <Image
          src={image}
          alt="Spinning glass cube"
          borderRadius="10px"
          height={{lg:"280px",md:"250px",base:"200px"}}
          w={{lg:"280px",md:"270px",base:"250px"}}
          objectFit={"cover"}
          mt={6}
          //   height={'20%'}
        />
        {/* </Box> */}

        {/* Main Content */}
        <Flex mt="1.2rem" flexDir={"column"} gap={2} overflow={"hidden"} px={8}>
          <Text fontSize={{ lg: "20px",md:"16px",base:"15px" }} color="white" fontWeight={"bold"}>
            {title}
          </Text>
          <Text color={'grey'} fontSize={{ lg: "13px",md:"12px",base:"11px" }}>
            {description}
          </Text>

          <Flex align="center" gap={4} mt={"5px"} wrap={"wrap"}>
            {stack?.map((data, i) => {
              return (
                <Badge
                  key={i}
                  variant="outline"
                  colorScheme="teal"
                  px={2}
                  py={1}
                  borderRadius={20}
                  color={"#33FFCC"}
                >
                  {data}
                </Badge>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default ProjectCard;
