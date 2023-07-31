import React from 'react';
import { Cloud } from './Cloud';

interface AppContainerProps {
    children: React.ReactNode;
}

export const Clouds: React.FC<AppContainerProps> = ({ children }) => {
    const [clouds, setClouds] = React.useState<JSX.Element[]>([]);

    const calculateDistance = (
        pos1: { x: number; y: number },
        pos2: { x: number; y: number },
    ): number => {
        const dx = pos1.x - pos2.x;
        const dy = pos1.y - pos2.y;
        return Math.sqrt(dx * dx + dy * dy);
    };

    const isPositionValid = (
        position: { x: number; y: number },
        existingPositions: { x: number; y: number }[],
        minDistance: number,
    ): boolean => {
        return !existingPositions.some((pos) => calculateDistance(pos, position) < minDistance);
    };

    const generatePosition = (
        width: number,
        height: number,
        existingPositions: { x: number; y: number }[],
        minDistance: number,
    ): { x: number; y: number } => {
        let position;
        do {
            const x = Math.floor(Math.random() * width);
            const y = Math.floor(Math.random() * height);
            position = { x, y };
        } while (!isPositionValid(position, existingPositions, minDistance));

        return position;
    };

    const generateClouds = (): JSX.Element[] => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const minDistance = 100; // Adjust this value as needed.
        const positions: { x: number; y: number }[] = [];
        const generatedClouds: JSX.Element[] = [];

        for (let i = 0; i < 10; i++) {
            const position = generatePosition(width, height, positions, minDistance);
            positions.push(position);
            generatedClouds.push(<Cloud positionX={position.x} positionY={position.y} />);
        }

        setClouds(generatedClouds);

        return clouds;
    };

    React.useEffect(() => {
        generateClouds();
    }, []);

    return (
        <div className="max-w-screen max-h-screen overflow-hidden w-screen h-screen bg-custom-primary z-40">
            {React.Children.toArray(children)}
            <div className="relative w-screen h-screen overflow-hidden z-0 pointer-events-none">
                {React.Children.toArray(clouds)}
            </div>
        </div>
    );
};
