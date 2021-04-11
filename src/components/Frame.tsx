/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */

import React, { FC } from "react";
import styled from "styled-components";
import { Box } from "./Box";

// Based on https://every-layout.dev/layouts/frame/

type Props = React.ComponentProps<typeof Box> & {
  /** Aspect ratio (e.g. `6/9`) */
  ratio: number;
};

const Inner = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img,
  & > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/**
 * Container that keeps the given aspect ratio. Most useful for images. Images are cropped by default (`object-fit: cover`) and other content is centered.
 */
export const Frame: FC<Props> = ({ children, ratio, ...rest }) => {
  return (
    <Box {...rest} position="relative" pb={`${ratio * 100}%`}>
      <Inner>{children}</Inner>
    </Box>
  );
};
