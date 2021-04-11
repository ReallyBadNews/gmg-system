import React from "react";
import { DefaultTheme } from "styled-components";
import { ResponsiveValue } from "styled-system";

export type AsProps = {
  as?:
    | React.ElementType
    | React.FunctionComponent<any>
    | React.ComponentClass<any>;
};

export type SpaceProp = ResponsiveValue<keyof DefaultTheme["space"]>;

export type SizeProp = ResponsiveValue<keyof DefaultTheme["sizes"]>;
