import styled from "styled-components";
import {
  compose,
  space,
  color,
  border,
  shadow,
  layout,
  position,
  flexbox,
  SpaceProps,
  ColorProps,
  BorderProps,
  ShadowProps,
  LayoutProps,
  PositionProps,
  FlexboxProps
} from "styled-system";
import { sx, SxProp } from "./utils/sx";

export type BoxProps = SpaceProps &
  ColorProps &
  BorderProps &
  ShadowProps &
  LayoutProps &
  PositionProps &
  FlexboxProps &
  SxProp;

const styleProps = compose(
  space,
  color,
  border,
  shadow,
  layout,
  position,
  flexbox
);

/**
 * Generic container with responsive props to control whitespace, layout, positioning and colors.
 */
export const Box = styled.div<BoxProps>(
  {
    boxSizing: "border-box",
    minWidth: 0
  },
  styleProps,
  sx
);

export default Box;
