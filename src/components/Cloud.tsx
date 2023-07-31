import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CloudSVG } from './CloudSVG';

interface CloudProperties {
    positionX: number;
    positionY: number;
}

export const Cloud: React.FC<CloudProperties> = ({ positionX, positionY }) => {
    return (
        <Container x={positionX} y={positionY} className="absolute z-0">
            <CloudSVG />
        </Container>
    );
};

const moveX = keyframes`
  0%   {transform: translateX(0);}
  50%  {transform: translateX(500px);}
  100% {transform: translateX(0);}
`;

interface ContainerProps {
    x?: number;
    y?: number;
}

const Container = styled.div<ContainerProps>`
    animation: ${moveX} linear;
    animation-duration: 8s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    top: ${({ y }) => y}px;
    left: ${({ x }) => x}px;
`;
