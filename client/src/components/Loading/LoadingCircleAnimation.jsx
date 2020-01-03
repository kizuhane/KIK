import React from "react";

import styled from "styled-components";
import { textHeader } from "../../Theme/theme";

const LoadingCircleWrapper = styled.div`
  position: absolute;
  display: block;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingCircleContainer = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
  @keyframes sk-chase {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingCircleDot = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: sk-chase-dot 2s infinite ease-in-out both;
  @keyframes sk-chase-dot {
    80%,
    100% {
      transform: rotate(360deg);
    }
  }
  :nth-child(1) {
    animation-delay: -1.1s;
  }
  :nth-child(2) {
    animation-delay: -1s;
  }
  :nth-child(3) {
    animation-delay: -0.9s;
  }
  :nth-child(4) {
    animation-delay: -0.8s;
  }
  :nth-child(5) {
    animation-delay: -0.7s;
  }
  :nth-child(6) {
    animation-delay: -0.6s;
  }
  :nth-child(1):before {
    animation-delay: -1.1s;
  }
  :nth-child(2):before {
    animation-delay: -1s;
  }
  :nth-child(3):before {
    animation-delay: -0.9s;
  }
  :nth-child(4):before {
    animation-delay: -0.8s;
  }
  :nth-child(5):before {
    animation-delay: -0.7s;
  }
  :nth-child(6):before {
    animation-delay: -0.6s;
  }

  ::before {
    content: "";
    display: block;
    width: 25%;
    height: 25%;
    background-color: ${textHeader}7F;
    border-radius: 100%;
    animation: sk-chase-dot-before 2s infinite ease-in-out both;
    @keyframes sk-chase-dot-before {
      50% {
        transform: scale(0.4);
      }
      100%,
      0% {
        transform: scale(1);
      }
    }
  }
`;

// Created by twitter.com/tobiasahlin source https://tobiasahlin.com/spinkit/
const LoadingCircleAnimation = () => {
  return (
    <LoadingCircleWrapper>
      <LoadingCircleContainer>
        <LoadingCircleDot />
        <LoadingCircleDot />
        <LoadingCircleDot />
        <LoadingCircleDot />
        <LoadingCircleDot />
        <LoadingCircleDot />
      </LoadingCircleContainer>
    </LoadingCircleWrapper>
  );
};

export default LoadingCircleAnimation;
