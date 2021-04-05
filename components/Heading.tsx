import React from "react";
import styled, { DefaultTheme } from "styled-components";
import {
  compose,
  space,
  layout,
  typography,
  variant,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ResponsiveValue
} from "styled-system";
import { AsProps } from "./types";
import { sx, SxProp } from "./utils/sx";

type Props = SpaceProps &
  LayoutProps &
  TypographyProps & {
    level?: ResponsiveValue<keyof DefaultTheme["headingStyles"]>;
  } & SxProp;

const HeadingBase: React.FunctionComponent<Props & AsProps> = ({
  level,
  as: Component = `h${level.toString()}`,
  sx: sxProp,
  ...props
}) => <Component sx={{ m: "$0", ...sxProp }} {...props} />;

export const Heading = styled(HeadingBase)<Props>(
  variant({
    scale: "headingStyles",
    prop: "level",
    // Trigger the new styled-system variants API
    // Actual variants to be defined in site-specific themes
    variants: { _: {} }
  }),
  compose(space, layout, typography),
  sx
);

Heading.defaultProps = {
  level: 1,
  sx: { m: "$0" }
};

export default Heading;
