import { Divider, Flex, Grid } from "@chakra-ui/react";
import TypewriterText from "../../Components/TypewriterText";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../common";

const Project = () => {
  const text = "P r o j e c t s ".split(" ");

  return (
    <Flex
      width={"100%"}
      flexDir={"column"}
      justifyContent={"center"}
      id="projects"
      alignItems={"center"}
      // px={10}
      py={20}
      gap={10}
    >
      <Flex flexDir={"column"}>
        <TypewriterText text={text} />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: "100%", // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
              delay: 0.8,
            },
          }}
          viewport={{ once: true }}
        >
          <Divider borderColor="brand.buttonGreen" borderWidth={2} />
        </motion.div>
      </Flex>
      {/* Project Card */}
      <Grid
        templateColumns={{
          xl: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        gap={{ xl: 10, lg: 16, md: 10, base: 5 }}
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            stack={project.stack}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default Project;
