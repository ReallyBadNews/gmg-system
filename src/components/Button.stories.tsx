/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from "@storybook/react";
import React from "react";
import { faCheckCircle } from "@fortawesome/pro-solid-svg-icons";
import { Stack } from "./Stack";
import { Button, ButtonProps } from "./Button";
import { Box } from "./Box";

export const All: Story = () => {
  return (
    <Stack gap="$3">
      <Stack direction="row" gap="$3">
        <Button size="sm" variant="$primary">
          Small Primary
        </Button>
        <Button size="sm" variant="$red">
          Small Red
        </Button>
        <Button size="sm" variant="$gray">
          Small Gray
        </Button>
        <Button size="sm" variant="$orange">
          Small Orange
        </Button>
        <Button size="sm" variant="$white">
          Small White
        </Button>
        <Button size="sm" variant="$ghost">
          Small Ghost
        </Button>
      </Stack>
      <Stack direction="row" gap="$3">
        <Button size="rg" variant="$primary">
          Primary Button
        </Button>
        <Button size="rg" variant="$red">
          Red Button
        </Button>
        <Button size="rg" variant="$gray">
          Gray Button
        </Button>
        <Button size="rg" variant="$orange">
          Orange Button
        </Button>
        <Button size="rg" variant="$white">
          White Button
        </Button>
        <Button size="rg" variant="$ghost">
          Ghost Button
        </Button>
      </Stack>
      <Stack direction="row" gap="$3">
        <Button size="lg" variant="$primary">
          Primary Button
        </Button>
        <Button size="lg" variant="$red">
          Red Button
        </Button>
        <Button size="lg" variant="$gray">
          Gray Button
        </Button>
        <Button size="lg" variant="$orange">
          Orange Button
        </Button>
        <Button size="lg" variant="$white">
          White Button
        </Button>
        <Button size="lg" variant="$ghost">
          Ghost Button
        </Button>
      </Stack>
      <Stack direction="row" gap="$3" sx={{ alignItems: "flex-end" }}>
        <Box>
          <Button iconRight={faCheckCircle} size="sm" variant="$primary">
            With Icon
          </Button>
        </Box>
        <Box>
          <Button iconRight={faCheckCircle} size="rg" variant="$primary">
            With Icon
          </Button>
        </Box>
        <Box>
          <Button iconRight={faCheckCircle} size="lg" variant="$primary">
            With Icon
          </Button>
        </Box>
        <Box>
          <Button iconLeft={faCheckCircle} size="lg" variant="$primary">
            With Icon
          </Button>
        </Box>
        <Box>
          <Button iconLeft={faCheckCircle} size="rg" variant="$primary">
            With Icon
          </Button>
        </Box>
        <Box>
          <Button iconLeft={faCheckCircle} size="sm" variant="$primary">
            With Icon
          </Button>
        </Box>
      </Stack>
      <Stack direction="row" gap="$3" sx={{ alignItems: "flex-end" }}>
        <Button size="sm" variant="$primary" loading>
          Loading
        </Button>
        <Button size="rg" variant="$primary" loading>
          Loading
        </Button>
        <Button size="lg" variant="$primary" loading>
          Loading
        </Button>
      </Stack>
    </Stack>
  );
};

const SizeTemplate: Story<ButtonProps> = (args) => (
  <Stack gap="$3">
    <Box>
      <Button {...args} />
    </Box>
  </Stack>
);

export const Small = SizeTemplate.bind({});
Small.args = {
  children: "Small Button",
  variant: "$primary",
  size: "sm",
};

const SoloTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = SoloTemplate.bind({});
Primary.args = {
  variant: "$primary",
  children: "Hello world!",
};

export const Gray = SoloTemplate.bind({});
Gray.args = {
  variant: "$gray",
  children: "Hello world!",
};

export default {
  title: "GMG/Button",
  component: Button,
} as Meta;
