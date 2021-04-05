/* eslint-disable import/prefer-default-export */

// import css from "@styled-system/css";

// export const sx = ({ sx: passedSx, theme }) => {
//   return css(passedSx)(theme);
// };

import css, { SystemStyleObject } from "@styled-system/css";

export type SxProp = { sx?: SystemStyleObject; theme?: Object };

export const sx = ({ sx, theme }: SxProp) => css(sx)(theme);
