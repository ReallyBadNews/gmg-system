/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from "@storybook/react";
import React from "react";
import { Box, BoxProps } from "./Box";

// 👇 We create a “template” of how args map to rendering
const Template: Story = (args) => <Box {...args} />;

export const Default = Template.bind({});

Default.args = {
  sx: {
    bg: "$blue.200",
    color: "$blue.900",
    width: "$64",
    height: "$64",
  },
};

export default {
  title: "GMG/Box",
  component: Box,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;
