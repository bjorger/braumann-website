import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CloudSVG } from './CloudSVG';

interface CloudProperties {
    positionX: number;
    positionY: number;
}

export const Cloud: React.FC<CloudProperties> = ({ positionX, positionY }) => {
    return (
        <Container positionX={positionX} positionY={positionY} className="absolute">
            <CloudSVG />
        </Container>
    );
};

const moveX = keyframes`
  0%   {transform: translateX(0);}
  50%  {transform: translateX(300px);}
  100% {transform: translateX(0);}
`;

interface ContainerProps {
    positionX?: number;
    positionY?: number;
}

const Container = styled.div<ContainerProps>`
    animation: ${moveX} linear;
    animation-duration: 5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    top: ${({ positionY }) => positionY}px;
    left: ${({ positionX }) => positionX}px;
`;
