/* eslint-disable import/prefer-default-export */

import { FC } from "react";
import styled from "styled-components";
import { Box } from "./Box";

const Loader = styled(Box)`
  /* Circle Spinner */
  .spCircle {
    width: 1.5rem;
    height: 1.5rem;
    border: 0.25rem solid rgba(255, 255, 255, 0.75);
    border-top: 0.25rem solid white;
    border-radius: 50%;
    animation: spCircRot 0.6s infinite linear;
  }

  @keyframes spCircRot {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(359deg);
    }
  }

  /* Balls Spinner */
  &.spballs,
  &.spballs:before,
  &.spballs:after {
    border-radius: 50%;
    background-color: white;
    width: 1rem;
    height: 1rem;
    transform-origin: center center;
    display: block;
  }

  &.spballs {
    position: relative;
    background-color: white;
    opacity: 1;
    animation: spScaleAlpha 1s infinite linear;
  }

  &.spballs:before,
  &.spballs:after {
    content: "";
    position: relative;
    opacity: 0.25;
  }

  &.spballs:before {
    left: 32px;
    top: 0;
    animation: spScaleAlphaAfter 1s infinite linear;
  }

  &.spballs:after {
    left: 64px;
    top: -16px;
    animation: spScaleAlphaBefore 1s infinite linear;
  }

  @keyframes spScaleAlpha {
    0% {
      opacity: 1;
    }
    33% {
      opacity: 0.25;
    }
    66% {
      opacity: 0.25;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes spScaleAlphaBefore {
    0% {
      opacity: 0.25;
    }
    33% {
      opacity: 1;
    }
    66% {
      opacity: 0.25;
    }
  }

  @keyframes spScaleAlphaAfter {
    33% {
      opacity: 0.25;
    }
    66% {
      opacity: 1;
    }
    100% {
      opacity: 0.25;
    }
  }
`;

interface SpinnerProps {
  spinner: "balls" | "circle";
}

export const Spinner: FC<SpinnerProps> = ({ spinner }) => {
  return <Loader className={`sp${spinner}`} />;
};
