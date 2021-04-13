/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Box } from "./Box";
import { SxProp } from "./utils/sx";

interface IconProps extends SxProp {
  icon: IconProp;
  fixedWidth?: boolean;
  listItem?: boolean;
}

export const Icon: FC<IconProps> = ({
  icon,
  fixedWidth,
  listItem,
  sx,
  ...rest
}) => {
  return (
    <Box sx={{ display: "inline-flex", ...sx }}>
      <FontAwesomeIcon
        fixedWidth={fixedWidth}
        icon={icon}
        listItem={listItem}
        {...rest}
      />
    </Box>
  );
};

Icon.defaultProps = {
  fixedWidth: false,
  listItem: false,
  sx: null,
};
