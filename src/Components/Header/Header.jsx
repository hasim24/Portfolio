import { Flex, Icon, Link, Spacer, Tooltip, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaCogs } from "react-icons/fa";
import { IoHomeSharp, IoPerson } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import logo from "../../assets/Skills/logo.png";

const Header = () => {
  const [pathHash, setPathHash] = useState(window.location.hash);
  // Listen to hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setPathHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  console.log(pathHash);

  return (
    <Flex
      color={"brand.white"}
      w={{ md: "95%", base: "90%" }}
      alignItems={"center"}
      py={{ md: 5, base: 4 }}
      pl={6}
      pr={10}
      border={"1px solid "}
      borderColor={"rgba(63, 63, 63, 0.5)"}
      zIndex={1000}
      bg={"rgba(22, 22, 22, 0.1)"}
      alignSelf={"center"}
      mt={6}
      borderRadius={{ md: 25, base: 15 }}
      boxShadow={"  0 8px 32px rgba(0, 0, 0, 0.4)"}
      backdropFilter={"blur( 40px )"}
      position={{ base: "fixed", md: "relative" }}
      bottom={{ base: 2, md: "" }}
    >
      <Image
        src={logo}
        alt="logo"
        w={{ md: 100, base: 90 }}
        objectFit={"contain"}
      />

      <Spacer display={{ base: "none", md: "block" }} />
      {/* Nav tabs */}
      <Flex gap={{ md: 10, base: 10 }} m={"auto"}>
        {navTabs.map((data, i) => {
          return (
            <Tooltip
              label={data.name}
              placement="bottom"
              key={i}
              fontSize={"12px"}
            >
              <Link
                href={`#${data.name.toLowerCase()}`}
                _hover={{ textDecoration: "none" }}
              >
                <Flex>
                  <Icon
                    as={data.icon}
                    boxSize={6}
                    color={
                      pathHash === `#${data.name.toLowerCase()}`
                        ? "brand.buttonGreen"
                        : "white"
                    }
                  />
                </Flex>
              </Link>
            </Tooltip>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Header;

const navTabs = [
  { name: "Home", icon: IoHomeSharp },
  { name: "About", icon: IoPerson },
  { name: "Skills", icon: FaCogs },
  { name: "Experience", icon: MdOutlineWork },
  { name: "Projects", icon: BsPersonWorkspace },
];
