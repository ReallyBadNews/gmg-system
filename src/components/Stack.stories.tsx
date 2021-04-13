/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from "@storybook/react";
import React from "react";
import { Box } from "./Box";
import { Stack, StackProps } from "./Stack";

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
  // textAlign: "center",
  "&:hover": {
    transform: "scale(1.01)",
    bg: "$blue.100",
    boxShadow: "$lg",
  },
  "&:active": {
    transform: "scale(0.95)",
    bg: "$blue.200",
    boxShadow: "$md",
  },
};

// 👇 We create a “template” of how args map to rendering
const Template: Story<StackProps> = (args) => (
  <Stack {...args}>
    {Array.from({ length: 4 }).map((item, index) => (
      <Box
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        sx={{ ...cardStyle, textAlign: "center" }}
      >
        {`${index + 1}`}
      </Box>
    ))}
  </Stack>
);

export const Default = Template.bind({});
Default.args = {
  gap: "$3",
};

export default {
  title: "GMG/Stack",
  component: Stack,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;
