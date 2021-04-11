/* eslint-disable react/jsx-props-no-spreading */

import React, { FC } from "react";
import styled, { DefaultTheme } from "styled-components";
import { ResponsiveValue, variant } from "styled-system";
import { Box, BoxProps } from "./Box";
import { AsProps } from "./types";

interface HeadingProps extends BoxProps {
  level?: ResponsiveValue<keyof DefaultTheme["headingStyles"]>;
}

const HeadingBase: FC<HeadingProps & AsProps> = ({
  level,
  as = `h${level.toString()}`,
  sx: sxProp,
  ...rest
}) => <Box as={as} sx={{ m: "$0", ...sxProp }} {...rest} />;

export const Heading = styled(HeadingBase)<HeadingProps>(
  variant({
    scale: "headingStyles",
    prop: "level",
    // Trigger the new styled-system variants API
    // Actual variants to be defined in site-specific themes
    variants: { _: {} },
  })
);

Heading.defaultProps = {
  level: 1,
  sx: { m: "$0" },
};

export default Heading;
