import {
  Button,
  useColorMode,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const ThemeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("red", "green");
  return (
    <Button onClick={toggleColorMode}>
      <Text color={textColor}>Dark</Text>
    </Button>
  );
};

export default ThemeSwitcher;
