import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  grid,
  GridProps,
  typography,
  TypographyProps,
} from "styled-system";
import { sx, SxProp } from "./utils/sx";

export type BoxProps = SpaceProps &
  ColorProps &
  BorderProps &
  ShadowProps &
  LayoutProps &
  PositionProps &
  FlexboxProps &
  TypographyProps &
  GridProps &
  SxProp;

const styleProps = compose(
  space,
  color,
  border,
  shadow,
  layout,
  position,
  flexbox,
  grid,
  typography
);

/**
 * Generic container with responsive props to control whitespace, layout, positioning and colors.
 */
export const Box = styled("div").withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !["direction", "display"].includes(prop) && defaultValidatorFn(prop),
})<BoxProps>(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  styleProps,
  sx
);
