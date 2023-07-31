import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

export const LoadingAnimation: React.FC = () => {
    const [isUnmounted, setIsUnmounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsUnmounted(true), 2000); // 2s to match animation duration
        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    if (isUnmounted) {
        return null;
    }

    return (
        <div className="absolute w-screen h-screen overflow-hidden z-55">
            <TriangleTop className="absolute w-screen h-screen bg-custom-tertiary z-55" />
            <TriangleBottom className="absolute w-screen h-screen bg-custom-tertiary z-55" />
        </div>
    );
};

const slideTopLeft = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, -100%);
  }
`;

const slideBottomRight = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(100%, 100%);
  }
`;

const TriangleTop = styled.div`
    clip-path: polygon(100% 0, 0 100%, 0 0);
    animation: ${slideTopLeft} 2s ease-in-out;
`;

const TriangleBottom = styled.div`
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
    animation: ${slideBottomRight} 2s ease-in-out;
`;
