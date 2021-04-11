/* eslint-disable import/prefer-default-export */

import { forwardRef, ReactNode } from "react";
import styled from "styled-components";
import { ResponsiveValue, system, TLengthStyledSystem } from "styled-system";
import { Box, BoxProps } from "./Box";
import { AsProps, SpaceProp } from "./types";

type Direction = "column" | "row";

interface StackProps extends BoxProps {
  /** Spacing between items */
  gap: SpaceProp;
  /** Direction: horizontal (`row`) or vertical (`column`) */
  direction?: ResponsiveValue<Direction>;
  flexDirection?: ResponsiveValue<Direction>;
  className?: string;
  marginCollapse?: boolean;
  children: ReactNode;
}

/**
 * Stacking layout: horizontal, vertical, and responsive. Adds equal amount
 * of spacing between children.
 */
const StackBase = styled(Box)<StackProps>(
  // We are using the “lobotomized owl” CSS selector to add margins between children
  // More information: https://every-layout.dev/layouts/stack/#the-solution
  system({
    gap: {
      // Set the gap value to a CSS property to later use it to add margin
      // at the correct side. We have to use CSS properties becase it's the
      // only way to use several responsive props together
      // @ts-ignore
      property: "> * + *",
      scale: "space",
      transform: (value, scale) => ({
        "--stack-gap": (scale as TLengthStyledSystem[])[value],
      }),
    },
  }),
  system({
    direction: {
      // @ts-ignore
      property: "&&",
      transform: (value) =>
        !value
          ? null
          : {
              flexDirection: value,
              // Use lobotomized owl selector to add margin on top or left
              // depending on the direction, use value from the CSS property
              "> * + *": {
                marginTop: value === "column" ? "var(--stack-gap)" : 0,
                marginLeft: value === "row" ? "var(--stack-gap)" : 0,
              },
            },
    },
  })
);

export const Stack = forwardRef<any, StackProps & AsProps>(
  (
    {
      as,
      className,
      gap,
      direction = "column",
      flexDirection,
      children,
      marginCollapse,
      sx,
    },
    ref
  ) => {
    const fd = direction || flexDirection;

    return (
      <StackBase
        as={as}
        ref={ref}
        gap={gap}
        direction={fd}
        className={className}
        sx={{ display: marginCollapse ? "block" : "flex", ...sx }}
      >
        {children}
      </StackBase>
    );
  }
);

Stack.displayName = "Stack";
