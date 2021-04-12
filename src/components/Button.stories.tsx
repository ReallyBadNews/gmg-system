/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from "@storybook/react";
import React from "react";
import { Button, ButtonProps } from "./Button";

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  variant: "$primary",
  children: "Hello world!",
};

export default {
  title: "GMG/Button",
  component: Button,
} as Meta;
