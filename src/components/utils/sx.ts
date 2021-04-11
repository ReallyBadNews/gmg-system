import css, { SystemStyleObject } from "@styled-system/css";
import { CSSObject, DefaultTheme } from "styled-components";

export type SxProp = { sx?: SystemStyleObject; theme?: DefaultTheme };

export const sx = ({ sx: sxProp, theme }: SxProp): CSSObject =>
  css(sxProp)(theme);
