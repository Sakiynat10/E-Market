"use client"

import styled, { keyframes } from 'styled-components';
import Image from "next/image";

import "./style.scss"


const scroll = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
`;

const MarqueeText = styled.div`
  display: flex;
  animation: ${scroll} 5s linear infinite;
`;

const ScrollingText: React.FC = () => {
    return (
      <MarqueeContainer>
        <MarqueeText className="brand-images">
            <div className="brand-img">
              <Image fill src="/brand-1.svg" alt="brand" />
            </div>
            <div className="brand-img">
              <Image fill src="/brand-2.svg" alt="brand" />
            </div>
            <div className="brand-img">
              <Image fill src="/brand-3.svg" alt="brand" />
            </div>
            <div className="brand-img">
              <Image fill src="/brand-4.svg" alt="brand" />
            </div>
        </MarqueeText>
      </MarqueeContainer>
    );
  };

  export default ScrollingText;