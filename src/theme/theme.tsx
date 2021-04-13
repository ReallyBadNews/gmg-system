import colors from "./colors";

const headingFont = [
  "'Gibson'",
  "-apple-system",
  "'Seegoee UI'",
  "'Helvetica Neue'",
  "Arial",
  "sans-serif",
].join(", ");

const bodyFont = [
  "'Open Sans'",
  "-apple-system",
  "'Seegoee UI'",
  "'Helvetica Neue'",
  "Arial",
  "sans-serif",
].join(", ");

const sizes = {
  $0: "0",
  $1: "0.25rem",
  $2: "0.5rem",
  $3: "0.75rem",
  "$3.5": "0.875rem",
  $4: "1rem",
  $5: "1.25rem",
  $6: "1.5rem",
  $8: "2rem",
  $10: "2.5rem",
  $12: "3rem",
  $14: "3.5rem",
  $16: "4rem",
  $20: "5rem",
  $24: "6rem",
  $32: "8rem",
  $40: "10rem",
  $48: "12rem",
  $56: "14rem",
  $64: "16rem",
  $72: "18rem",
  $80: "20rem",
  $128: "32rem",
  $max: "78rem",
  $auto: "auto",
  $px: "1px",
  "$1/2": "50%",
  "$1/3": "33.333333%",
  "$2/3": "66.666667%",
  "$1/4": "25%",
  "$2/4": "50%",
  "$3/4": "75%",
  "$1/5": "20%",
  "$2/5": "40%",
  "$3/5": "60%",
  "$4/5": "80%",
  "$1/6": "16.666667%",
  "$2/6": "33.333333%",
  "$3/6": "50%",
  "$4/6": "66.666667%",
  "$5/6": "83.333333%",
  "$1/12": "8.333333%",
  "$2/12": "16.666667%",
  "$3/12": "25%",
  "$4/12": "33.333333%",
  "$5/12": "41.666667%",
  "$6/12": "50%",
  "$7/12": "58.333333%",
  "$8/12": "66.666667%",
  "$9/12": "75%",
  "$10/12": "83.333333%",
  "$11/12": "91.666667%",
  $full: "100%",
  $screen: "100vw",
};

const space = {
  "$-7": "-3rem",
  "$-6": "-2.5rem",
  "$-5": "-2rem",
  "$-4": "-1.5rem",
  "$-3": "-1rem",
  "$-2": "-0.5rem",
  "$-1": "-0.25rem",
  $0: "0",
  $1: "0.25rem",
  $2: "0.5rem",
  $3: "1rem",
  $4: "1.5rem",
  $5: "2rem",
  $6: "2.5rem",
  $7: "3rem",
  $8: "4rem",
  $9: "6rem",
  $10: "8rem",
  $11: "16rem",
  $12: "32rem",
  $px: "1px",
  $auto: "auto",
};

const breakpoints = ["640px", "769px", "1024px", "1248px"];

const fonts = {
  $openSans: bodyFont,
  $gibson: headingFont,
};

const fontSizes = {
  $0: "0.75rem",
  $1: "0.875rem",
  $2: "1rem",
  $3: "1.25rem",
  $4: "1.5rem",
  $5: "2rem",
  $6: "2.5rem",
  $7: "3rem",
  $8: "4rem",
  $9: "4.5rem",
};

const fontWeights = {
  $light: "200",
  $normal: "400",
  $medium: "500",
  $semibold: "600",
  $bold: "700",
  $black: "900",
};

const lineHeights = {
  $none: "1",
  $tight: "1.25",
  $snug: "1.375",
  $normal: "1.5",
  $relaxed: "1.625",
  $loose: "2",
};

const letterSpacings = {
  $tighter: "-0.05em",
  $tight: "-0.025em",
  $normal: "0",
  $wide: "0.025em",
  $wider: "0.05em",
  $widest: "0.1em",
};

const borderWidths = {
  $0: "0",
  $1: "1px",
  $2: "2px",
  $4: "4px",
  $8: "8px",
  $default: "1px",
};

const borderStyles = {
  $solid: "solid",
  $dotted: "dotted",
  $dashed: "dashed",
};

const headingBaseStyles = {
  // color: "$blueGray.900",
  fontFamily: "$gibson",
  // fontWeight: "$bold",
  lineHeight: "$none",
  letterSpacing: "$normal",
};

const textBaseStyles = {
  // color: "inherit",
  // fontFamily: "$openSans",
  // fontWeight: "$normal",
  lineHeight: "$normal",
  letterSpacing: "$normal",
};

const buttonBaseStyles = {
  fontFamily: "$gibson",
  lineHeight: "$none",
  appearance: "none",
  outline: "none",
  border: "none",
};

const radii = {
  $none: "0",
  $sm: "0.125rem",
  $default: "0.25rem",
  $md: "0.375rem",
  $lg: "0.5rem",
  $xlg: "1rem",
  $full: "9999px",
};

const shadows = {
  $xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  $sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  $default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  $md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  $lg:
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  $xl:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  $2xl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  $inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  $outline:
    "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, 0 2px 8px 0 rgba(0, 0, 0, 0.15), 0 0 4px 2px rgba(0, 0, 0, 0.02)",
  $grayButtonFocus: "0 0 0 2px #94a3b8",
  $primaryButtonFocus: "0 0 0 2px #1d4ed8",
  $redButtonFocus: "0 0 0 2px #b91c1c",
  $orangeButtonFocus: "0 0 0 2px #c2410c",
  $none: "none",
};

const zIndices = {
  $0: "0",
  $1: "1",
  $10: "10",
  $20: "20",
  $30: "30",
  $40: "40",
  $50: "50",
  $100: "100",
  $1000: "1000",
  $auto: "auto",
};

const theme = {
  fonts,
  space,
  sizes,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  colors,
  borderWidths,
  borderStyles,
  breakpoints,
  radii,
  shadows,
  zIndices,
  headingStyles: {
    1: {
      ...headingBaseStyles,
      fontSize: "$6",
    },
    2: {
      ...headingBaseStyles,
      fontSize: "$5",
    },
    3: {
      ...headingBaseStyles,
      fontSize: "$4",
    },
    4: {
      ...headingBaseStyles,
      fontSize: "$3",
    },
    5: {
      ...headingBaseStyles,
      fontSize: "$2",
    },
    6: {
      ...headingBaseStyles,
      fontSize: "$2",
    },
  },
  textStyles: {
    $base: {
      ...textBaseStyles,
    },
    $xxl: {
      ...textBaseStyles,
      fontSize: "$5",
    },
    $xl: { ...textBaseStyles },
    $lg: { ...textBaseStyles },
    $md: { ...textBaseStyles },
    $rg: { ...textBaseStyles },
    $sm: { ...textBaseStyles },
    $xsm: { ...textBaseStyles },
    $xxsm: { ...textBaseStyles },
  },
  buttonStyles: {
    $primary: {
      ...buttonBaseStyles,
      fontWeight: "$semibold",
      color: "$blue.50",
      backgroundColor: "$blue.500",
      borderRadius: "$md",
      "&:hover": {
        backgroundColor: "$blue.600",
      },
      "&:focus": {
        boxShadow: "$primaryButtonFocus",
      },
      "&:active": {
        backgroundColor: "$blue.700",
        boxShadow: "$primaryButtonFocus",
      },
    },
    $red: {
      ...buttonBaseStyles,
      fontWeight: "$semibold",
      color: "$red.50",
      backgroundColor: "$red.500",
      borderRadius: "$md",
      "&:hover": {
        backgroundColor: "$red.600",
      },
      "&:focus": {
        boxShadow: "$redButtonFocus",
      },
      "&:active": {
        backgroundColor: "$red.700",
        boxShadow: "$redButtonFocus",
      },
    },
    $orange: {
      ...buttonBaseStyles,
      fontWeight: "$semibold",
      color: "$orange.50",
      backgroundColor: "$orange.400",
      borderRadius: "$md",
      "&:hover": {
        backgroundColor: "$orange.500",
      },
      "&:focus": {
        boxShadow: "$orangeButtonFocus",
      },
      "&:active": {
        backgroundColor: "$orange.600",
        boxShadow: "$orangeButtonFocus",
      },
    },
    $gray: {
      ...buttonBaseStyles,
      fontWeight: "$medium",
      letterSpacing: "$wide",
      color: "$blueGray.500",
      backgroundColor: "$blueGray.100",
      borderRadius: "$default",
      "&:hover": {
        backgroundColor: "$blueGray.200",
      },
      "&:focus": {
        boxShadow: "$grayButtonFocus",
      },
      "&:active": {
        backgroundColor: "$blueGray.300",
        boxShadow: "$grayButtonFocus",
      },
    },
    $white: {
      ...buttonBaseStyles,
      fontWeight: "$regular",
      letterSpacing: "$wide",
      color: "$blueGray.900",
      backgroundColor: "$white",
      borderRadius: "$default",
      border: "1px solid",
      borderColor: "$blueGray.300",
      "&:focus": {
        boxShadow: "$grayButtonFocus",
      },
      "&:active": {
        boxShadow: "$grayButtonFocus",
      },
    },
    $ghost: {
      ...buttonBaseStyles,
      backgroundColor: "transparent",
      borderRadius: "$md",
      "&:hover": {
        backgroundColor: "$blueGray.100",
      },
      "&:focus": {
        boxShadow: "$grayButtonFocus",
      },
      "&:active": {
        backgroundColor: "$blueGray.200",
        boxShadow: "$grayButtonFocus",
      },
    },
  },
};

export default theme;
