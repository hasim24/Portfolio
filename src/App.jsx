import { Flex } from "@chakra-ui/react";
import "./App.css";
import { useEffect, useState } from "react";
import Preloader from "./Components/Preloader/Preloader";
import MainLayout from "./Layout/MainLayout";
// import ThemeSwitcher from "./Components/ThemeSwitcher";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <Flex
      bg={"brand.mainBg"}
      minH={"100vh"}
      overflowX={"hidden"}
      w={"100%"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      className="font-link"
      // pb={20}
    >
      {/* <ThemeSwitcher /> */}
      {loading ? <Preloader /> : <MainLayout />}
    </Flex>
  );
}

export default App;
