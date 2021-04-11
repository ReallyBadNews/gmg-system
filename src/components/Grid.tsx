/* eslint-disable import/prefer-default-export */

import styled from "styled-components";
import {
  ResponsiveValue,
  system,
  TLengthStyledSystem,
  Scale,
} from "styled-system";
import { Box, BoxProps } from "./Box";
import { SpaceProp, SizeProp } from "./types";

interface GridProps extends BoxProps {
  /** Minimum width of a child, will create responsive CSS Grid layout like
   * `grid-template-columns: repeat(auto-fit, minmax($minColumnWidth$)}, 1fr))`.
   * (You can use either this prop or `numColumns` but not both.)
   */
  minColumnWidth?: SizeProp | number;
  /** Number of columns, will create a responsive CSS Grid layout like
   * `grid-template-columns: repeat($numColumns$, 1fr))`.
   * (You can use either this prop or `minColumnWidth` but not both.)
   */
  columns?: ResponsiveValue<number>;
  /**
   * column-gap + row-gap
   */
  gap?: SpaceProp;
  /**
   * column-gap
   */
  xGap?: SpaceProp;
  /**
   * row-gap
   */
  yGap?: SpaceProp;
}

const px = (value: TLengthStyledSystem): string =>
  typeof value === "number" ? `${value}px` : value;

const getMinMaxValue = (
  value: TLengthStyledSystem,
  scale: Scale = []
): string => px(scale[value] || value);

/**
 * Generic CSS Grid layout component. Based on the `Box` component but with `display: grid` by default.
 */
export const Grid = styled(Box)<GridProps>(
  system({
    minColumnWidth: {
      property: "gridTemplateColumns",
      scale: "sizes",
      transform: (value: TLengthStyledSystem, scale) =>
        value
          ? `repeat(auto-fit, minmax(${getMinMaxValue(value, scale)}, 1fr))`
          : null,
    },
    columns: {
      property: "gridTemplateColumns",
      transform: (value) => (value ? `repeat(${value}, 1fr)` : null),
    },
    gap: {
      property: "gridGap",
      scale: "space",
    },
    xGap: {
      property: "gridColumnGap",
      scale: "space",
    },
    yGap: {
      property: "gridRowGap",
      scale: "space",
    },
  })
);

Grid.defaultProps = {
  display: "grid",
};
