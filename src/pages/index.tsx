import { faCheckCircle, faTimesCircle } from "@fortawesome/pro-solid-svg-icons";
import { NextPage } from "next";
import Head from "next/head";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Grid } from "../components/Grid";
import { Heading } from "../components/Heading";
import { Stack } from "../components/Stack";
import { Text } from "../components/Text";

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
    boxShadow: "$lg",
  },
  "&:active": {
    transform: "scale(0.95)",
    bg: "$blue.200",
    boxShadow: "$md",
  },
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GMG System</title>
      </Head>
      <Box
        as="main"
        sx={{
          textDecoration: "none",
          minWidth: "100vw",
          minHeight: "100vh",
          width: "$full",
          height: "$full",
          bg: "$blueGray.50",
          py: "$7",
        }}
      >
        <Stack
          as="section"
          gap={["$3", null, null, "$5"]}
          sx={{ maxWidth: "$max", mx: "auto", px: "$4" }}
          marginCollapse
        >
          <Stack direction={["row", "column"]} gap="$6">
            <Heading level={1}>Baba Booey!</Heading>
            <Stack direction={["column", null, "row"]} gap="$3">
              <Text sx={{ color: "$blueGray.400" }} variant="$base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Adipiscing diam donec adipiscing tristique risus nec feugiat in.
                Est ullamcorper eget nulla facilisi etiam dignissim diam. Sed
                odio morbi quis commodo odio. Mattis pellentesque id nibh tortor
                id. Enim nunc faucibus a pellentesque sit amet porttitor eget
                dolor. Aliquet enim tortor at auctor urna nunc id cursus metus.
                Facilisi nullam vehicula ipsum a arcu. Sed ullamcorper morbi
                tincidunt ornare massa eget egestas. Faucibus scelerisque
                eleifend donec pretium vulputate. Aenean pharetra magna ac
                placerat vestibulum lectus mauris. Molestie nunc non blandit
                massa enim nec dui. Velit scelerisque in dictum non consectetur
                a erat. Consequat interdum varius sit amet mattis vulputate enim
                nulla. Lacus sed viverra tellus in hac habitasse platea dictumst
                vestibulum.
              </Text>
              <Text sx={{ color: "$blueGray.400" }} variant="$base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Adipiscing diam donec adipiscing tristique risus nec feugiat in.
                Est ullamcorper eget nulla facilisi etiam dignissim diam. Sed
                odio morbi quis commodo odio. Mattis pellentesque id nibh tortor
                id. Enim nunc faucibus a pellentesque sit amet porttitor eget
                dolor. Aliquet enim tortor at auctor urna nunc id cursus metus.
                Facilisi nullam vehicula ipsum a arcu. Sed ullamcorper morbi
                tincidunt ornare massa eget egestas. Faucibus scelerisque
                eleifend donec pretium vulputate. Aenean pharetra magna ac
                placerat vestibulum lectus mauris. Molestie nunc non blandit
                massa enim nec dui. Velit scelerisque in dictum non consectetur
                a erat. Consequat interdum varius sit amet mattis vulputate enim
                nulla. Lacus sed viverra tellus in hac habitasse platea dictumst
                vestibulum.
              </Text>
            </Stack>
            <Stack gap="$1">
              <Heading level={3}>Tata Toothey</Heading>
              <Text sx={{ color: "$blueGray.400" }} variant="$base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Adipiscing diam donec adipiscing tristique risus nec feugiat in.
                Est ullamcorper eget nulla facilisi etiam dignissim diam. Sed
                odio morbi quis commodo odio. Mattis pellentesque id nibh tortor
                id. Enim nunc faucibus a pellentesque sit amet porttitor eget
                dolor. Aliquet enim tortor at auctor urna nunc id cursus metus.
                Facilisi nullam vehicula ipsum a arcu. Sed ullamcorper morbi
                tincidunt ornare massa eget egestas. Faucibus scelerisque
                eleifend donec pretium vulputate. Aenean pharetra magna ac
                placerat vestibulum lectus mauris. Molestie nunc non blandit
                massa enim nec dui. Velit scelerisque in dictum non consectetur
                a erat. Consequat interdum varius sit amet mattis vulputate enim
                nulla. Lacus sed viverra tellus in hac habitasse platea dictumst
                vestibulum.
              </Text>
            </Stack>
          </Stack>
          <Stack gap="$2">
            <Heading level={4} sx={{ fontWeight: "$normal" }}>
              minColumnWidth:
            </Heading>
            <Grid as="section" gap="$3" minColumnWidth="$64">
              {Array.from({ length: 4 }).map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Box key={index} sx={{ ...cardStyle, textAlign: "center" }}>
                  {`Card ${index + 1}`}
                </Box>
              ))}
            </Grid>
          </Stack>
          <Stack gap="$2">
            <Heading level={4} sx={{ fontWeight: "$normal" }}>
              columns:
            </Heading>
            <Grid as="section" columns={[1, 2, null, null, 4]} gap="$3">
              {Array.from({ length: 4 }).map((item, index) => (
                <Box
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  sx={{
                    ...cardStyle,
                    bg: "$red.200",
                    color: "$red.900",
                    textAlign: "center",
                  }}
                >
                  {`Card ${index + 1}`}
                </Box>
              ))}
            </Grid>
          </Stack>
          <Stack direction="row" gap="$2">
            <Button iconRight={faCheckCircle} size="rg" variant="$primary">
              Hello world
            </Button>
            <Button iconLeft={faTimesCircle} size="sm" variant="$red">
              Cancel
            </Button>
            <Button size="rg" variant="$gray">
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
