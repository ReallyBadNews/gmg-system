import styled, { DefaultTheme } from "styled-components";
import {
  compose,
  space,
  layout,
  typography,
  color,
  border,
  shadow,
  variant,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  BorderProps,
  ShadowProps,
  ResponsiveValue
} from "styled-system";
import { sx, SxProp } from "./utils/sx";

type Props = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  BorderProps &
  ShadowProps & {
    variant?: ResponsiveValue<keyof DefaultTheme["shadows"]>;
  } & SxProp;

const styleProps = compose(space, layout, typography, color, border, shadow);

/**
 * Text component.
 */
export const Text = styled.p<Props>(
  {
    boxSizing: "border-box"
  },
  variant({
    scale: "textStyles",
    prop: "variant",
    // Trigger the new styled-system variants API
    // Actual variant to be defined in site-specific themes
    variants: { _: {} }
  }),
  styleProps,
  sx
);

Text.defaultProps = {
  variant: "base"
};
