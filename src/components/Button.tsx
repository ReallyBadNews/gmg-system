/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { forwardRef } from "react";
import styled, { DefaultTheme } from "styled-components";
import { ResponsiveValue, variant } from "styled-system";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { Text } from "./Text";
import { AsProps } from "./types";
import { SxProp } from "./utils/sx";

type Props = SxProp & AsProps;

export interface ButtonProps extends Props {
  variant: ResponsiveValue<keyof DefaultTheme["buttonStyles"]>;
  size: "sm" | "rg" | "lg";
  className?: string;
  onClick?: () => void;
  iconLeft?: IconProp;
  iconRight?: IconProp;
  loading?: boolean;
  spinner?: "balls" | "circle";
}

const BaseButton = styled(Box)<ButtonProps>(
  {
    appearance: "none",
    outline: "none",
    border: "none",
    alignItems: "center",
    transition: "all 300ms cubic-bezier(0.25, 0.8, 0.25, 1)",
  },
  variant({
    scale: "buttonStyles",
    prop: "variant",
    variants: { _: {} },
  })
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as = "button",
      children,
      className,
      iconLeft,
      iconRight,
      size,
      variant: variantProp,
      onClick,
      loading,
      spinner = "balls",
      sx: sxProp,
      ...rest
    },
    ref
  ) => {
    if (size === "sm") {
      return (
        <BaseButton
          as={as}
          className={className}
          ref={ref}
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: ["$0", "$1", "$2"],
            py: "$1",
            borderRadius: "$sm",
            cursor: "pointer",
            ...sxProp,
          }}
          variant={variantProp}
          onClick={onClick}
          {...rest}
        >
          {iconLeft && (
            <Icon
              icon={iconLeft}
              sx={{ mr: "$2", maxHeight: "$4" }}
              fixedWidth
            />
          )}
          {loading ? (
            <Box sx={{ minWidth: "$20" }}>
              <GMGSpinner spinner={spinner} active />
            </Box>
          ) : (
            <Text as="span" sx={{ color: "inherit", fontFamily: "$gibson" }}>
              {children}
            </Text>
          )}
          {iconRight && !loading && (
            <Icon
              icon={iconRight}
              sx={{ ml: "$2", maxHeight: "$4" }}
              fixedWidth
            />
          )}
        </BaseButton>
      );
    }

    if (size === "rg") {
      return (
        <BaseButton
          as={as}
          className={className}
          ref={ref}
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: ["$1", null, "$2"],
            px: "$3",
            py: "$2",
            cursor: "pointer",
            ...sxProp,
          }}
          variant={variantProp}
          onClick={onClick}
          {...rest}
        >
          {iconLeft && (
            <Icon
              icon={iconLeft}
              sx={{ mr: "$2", maxHeight: "$4" }}
              fixedWidth
            />
          )}
          {loading ? (
            <Box sx={{ minWidth: "$20" }}>
              <GMGSpinner spinner={spinner} active />
            </Box>
          ) : (
            <Text as="span" sx={{ color: "inherit", fontFamily: "$gibson" }}>
              {children}
            </Text>
          )}
          {iconRight && !loading && (
            <Icon
              icon={iconRight}
              sx={{ ml: "$2", maxHeight: "$4" }}
              fixedWidth
            />
          )}
        </BaseButton>
      );
    }

    if (size === "lg") {
      return (
        <BaseButton
          as={as}
          className={className}
          ref={ref}
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: ["$1", null, "$2"],
            p: "$3",
            cursor: "pointer",
            ...sxProp,
          }}
          variant={variantProp}
          onClick={onClick}
          {...rest}
        >
          {iconLeft && (
            <Icon
              icon={iconLeft}
              sx={{ mr: "$2", maxHeight: "$4" }}
              fixedWidth
            />
          )}
          {loading ? (
            <Box sx={{ minWidth: "$20" }}>
              <GMGSpinner spinner={spinner} active />
            </Box>
          ) : (
            <Text as="span" sx={{ color: "inherit", fontFamily: "$gibson" }}>
              {children}
            </Text>
          )}
          {iconRight && !loading && (
            <Icon
              icon={iconRight}
              sx={{ ml: "$2", maxHeight: "$4" }}
              fixedWidth
            />
          )}
        </BaseButton>
      );
    }

    return null;
  }
);

Button.displayName = "Button";

Button.defaultProps = {
  as: "button",
  size: "rg",
  loading: false,
  spinner: "balls",
};

// const ButtonBase: FC<ButtonProps> = forwardRef(
//   (
//     {
//       as,
//       children,
//       className,
//       onClick,
//       iconLeft,
//       iconRight,
//       loading,
//       spinner,
//       variant: variantProp,
//       size,
//       sx,
//       ...rest
//     },
//     ref
//   ) => {
//     const sizeTable = {
//       sm: (): JSX.Element => {
//         return (
//           <Box
//             as={as}
//             className={className}
//             ref={ref}
//             sx={{
//               borderRadius: "$sm",
//               cursor: "pointer",
//               display: "flex",
//               fontSize: ["$0", "$1", "$2"],
//               justifyContent: "center",
//               py: "$1",
//               ...sx,
//             }}
//             variant={variantProp}
//             onClick={onClick}
//             {...rest}
//           >
//             {iconLeft && (
//               <Icon
//                 icon={iconLeft}
//                 sx={{ mr: "$2", maxHeight: "$4" }}
//                 fixedWidth
//               />
//             )}
//             {loading ? (
//               <Box sx={{ minWidth: "$20" }}>
//                 <GMGSpinner spinner={spinner} active />
//               </Box>
//             ) : (
//               <Text as="span" sx={{ color: "inherit" }}>
//                 {children}
//               </Text>
//             )}
//             {iconRight && !loading && (
//               <Icon
//                 icon={iconRight}
//                 sx={{ ml: "$2", maxHeight: "$4" }}
//                 fixedWidth
//               />
//             )}
//           </Box>
//         );
//       },
//     };

//     return sizeTable[size];
//   }
// );

// export const Button = styled(ButtonBase)<ButtonProps>(
//   variant({
//     scale: "",
//     prop: "variant",
//     variants: { _: {} },
//   })
// );
