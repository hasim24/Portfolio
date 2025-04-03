import { Button, Flex, Icon, Image, Spacer, Text } from "@chakra-ui/react";
import { BsArrowDown, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import right from "../assets/homeright.png";
import Titlename from "../Components/TitleName/Titlename";
import { motion } from "framer-motion";
import resume from "../assets/Hashim-Quraishi-Software-Developer.pdf";

const Home = () => {
  const handleDownload = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Hashim Quraishi - Software Developer.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Flex
      // minH={{ lg: "90vh", base: "auto" }}
      alignItems={"center"}
      id="home"
      alignSelf={"center"}
      flexDir={{ base: "column", lg: "row" }}
      py={{ base: 10, lg: 20 }}
    >
      {/* Left Side starts */}

      <Flex
        w={{ lg: "60%", base: "85%" }}
        flexDir={"column"}
        gap={{ md: 5, base: 5 }}
        pl={{ xl: 28, lg: 20 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
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
          <Text
            fontSize={{ lg: 50, md: 40, base: 28 }}
            fontWeight={600}
            color="brand.white"
          >
            Hello, I&apos;m <span style={{ color: "#33FFCC" }}>Hashim!</span>
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          <Titlename />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0, // Slide in to its original position
            transition: {
              duration: 0.5, // Animation duration
              delay: 0.7,
            },
          }}
          viewport={{ once: true }}
        >
          <Text
            fontSize={{ xl: 18, md: 16, base: 14 }}
            color="white"
            lineHeight={1.5}
            w={{ xl: "80%", md: "90%" }}
          >
            I build modern, responsive websites that deliver
            seamless user experiences. With a passion for clean code and
            innovative solutions, I turn ideas into reality.
          </Text>
        </motion.div>
        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
              delay: 0.9,
            },
          }}
          viewport={{ once: true }}
        >
          <Flex gap={{ md: 6, base: 3 }}>
            {/* Download Button */}
            <Button
              variant={"unstyled"}
              borderRadius={50}
              border={"1px solid"}
              borderColor={"brand.buttonGreen"}
              h={{ lg: "50px", md: "45px", base: "42px" }}
              width={{ lg: "180px", md: "160px", base: "135px" }}
              cursor={"pointer"}
              onClick={handleDownload}
            >
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                w={"100%"}
                gap={{ md: 2, base: 1 }}
              >
                <Icon
                  as={BsArrowDown}
                  boxSize={4}
                  color={"brand.buttonGreen"}
                />
                <Text
                  fontSize={{ md: 16, base: 14 }}
                  fontWeight={600}
                  color={"brand.buttonGreen"}
                >
                  Download CV
                </Text>
              </Flex>
            </Button>
            <Flex gap={{ md: 5, base: 3 }}>
              {/* Github icon */}
              <Flex
                border={"1px solid"}
                alignItems={"center"}
                justifyContent={"center"}
                width={{ lg: "50px", md: "45px", base: "42px" }}
                borderRadius={50}
                borderColor={"brand.buttonGreen"}
                onClick={() => {
                  window.location.href = "https://github.com/hasim24";
                }}
                cursor={"pointer"}
              >
                <Icon as={BsGithub} boxSize={7} color={"brand.buttonGreen"} />
              </Flex>
              {/* Linkedin icon */}

              <Flex
                border={"1px solid"}
                alignItems={"center"}
                justifyContent={"center"}
                width={{ lg: "50px", md: "45px", base: "42px" }}
                borderRadius={50}
                borderColor={"brand.buttonGreen"}
                onClick={() => {
                  window.location.href =
                    "https://www.linkedin.com/in/hashimquraishi24";
                }}
                cursor={"pointer"}
              >
                <Icon
                  as={FaLinkedinIn}
                  boxSize={6}
                  color={"brand.buttonGreen"}
                />
              </Flex>
            </Flex>
          </Flex>
        </motion.div>
      </Flex>
      {/* Left Side Ends */}
      <Spacer />
      {/* Right Side starts */}
      <Flex
        w={{ lg: "40%", md: "60%", base: "100%" }}
        justifyContent={"center"}
        alignItems={"center"}
        pl={{base:10,lg:0}}
      >
        <Image src={right} alt="right" />
      </Flex>
      {/* Right Side Ends */}
    </Flex>
  );
};

export default Home;
