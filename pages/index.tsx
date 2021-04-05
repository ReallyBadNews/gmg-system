import { Box } from "../components/Box";
import { Flex } from "../components/Flex";
import { Stack } from "../components/Stack";
import { Text } from "../components/Text";
import { Heading } from "../components/Heading";

const cardStyle = {
  fontFamily: "$gibson",
  fontSize: "$6",
  fontWeight: "$semibold",
  bg: "$blue.200",
  color: "$blue.900",
  paddingY: "$4",
  paddingX: "$5",
  borderRadius: "$lg",
  boxShadow: "$md",
  cursor: "pointer",
  transition: "all 100ms cubic-bezier(0.25, 0.8, 0.25, 1)",
  "&:hover": {
    transform: "scale(1.05)",
    bg: "$blue.100",
    boxShadow: "$lg"
  },
  "&:active": {
    transform: "scale(0.95)",
    bg: "$blue.200",
    boxShadow: "$md"
  }
};

export default function Home() {
  return (
    <Box
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        width: "$full",
        height: "$full",
        bg: "$blueGray.50",
        display: "grid",
        placeContent: "center"
      }}
    >
      <Stack gap="$3">
        <Stack direction={["column", "column", "row"]} gap={["$3", "$1", "$3"]}>
          {Array.from({ length: 4 }).map((item, index) => (
            <Box key={index} sx={cardStyle}>
              {`Card ${index + 1}`}
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
