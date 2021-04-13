/* eslint-disable import/prefer-default-export */

import styled, { DefaultTheme } from "styled-components";
import { ResponsiveValue, variant } from "styled-system";
import { Box, BoxProps } from "./Box";

interface TextProps extends BoxProps {
  variant?: ResponsiveValue<keyof DefaultTheme["textStyles"]>;
}

/**
 * Text component.
 */
export const Text = styled(Box)<TextProps>(
  variant({
    scale: "textStyles",
    prop: "variant",
    // Trigger the new styled-system variants API
    // Actual variant to be defined in site-specific themes
    variants: { _: {} },
  })
);
