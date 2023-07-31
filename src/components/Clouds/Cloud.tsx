import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CloudSVG } from './CloudSVG';

interface CloudProperties {
    positionX: number;
    positionY: number;
}

export const Cloud: React.FC<CloudProperties> = ({ positionX, positionY }) => {
    const animationDelay = Math.random();
    const animationLength = Math.random() * 200 + 400;

    return (
        <Container
            x={positionX}
            y={positionY}
            delay={animationDelay}
            length={animationLength}
            className="absolute z-0"
        >
            <CloudSVG />
        </Container>
    );
};

const moveX = (length: number) => keyframes`
  0%   {transform: translateX(0);}
  50%  {transform: translateX(${length}px);}
  100% {transform: translateX(0);}
`;

interface ContainerProps {
    x: number;
    y: number;
    delay: number;
    length: number;
}

const Container = styled.div<ContainerProps>`
    animation: ${({ length }) => moveX(length)} linear;
    animation-duration: 8s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    top: ${({ y }) => y}px;
    left: ${({ x }) => x}px;
    animation-delay: ${({ delay }) => delay}s; // Apply the delay
`;
