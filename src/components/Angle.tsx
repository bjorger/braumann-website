import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

enum AngleComponentDirection {
    HORIZONTAL,
    VERTICAL,
}
export const Angle: React.FC = () => {
    return (
        <div className="absolute p-8 w-full h-full z-50 pointer-events-none">
            <div>
                <AngleComponent
                    direction={AngleComponentDirection.HORIZONTAL}
                    className="bg-custom-secondary"
                />
                <AngleComponent
                    direction={AngleComponentDirection.VERTICAL}
                    className="bg-custom-secondary"
                />
                <Logo className="absolute top-24 left-24" src={logo} alt="website logo" />
            </div>
            <div className="absolute bottom-8 right-8">
                <AngleComponent
                    direction={AngleComponentDirection.HORIZONTAL}
                    className="bg-custom-secondary"
                />
                <AngleComponent
                    direction={AngleComponentDirection.VERTICAL}
                    className="absolute right-0 bottom-0 bg-custom-secondary"
                />
            </div>
        </div>
    );
};

interface AngleComponentProps {
    direction?: AngleComponentDirection;
}

const AngleComponent = styled.div<AngleComponentProps>`
    height: ${({ direction }) =>
        direction === AngleComponentDirection.HORIZONTAL ? '16px' : '304px'};
    width: ${({ direction }) =>
        direction === AngleComponentDirection.HORIZONTAL ? '304px' : '16px'};
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;

    @media (max-width: 768px) {
        display: none;
    }
`;
