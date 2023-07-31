import React, { useState } from 'react';
import styled from 'styled-components';

interface AccordionAnimateProps {
    icon: React.ReactNode;
    details: React.ReactNode | string;
}

export const AccordionItem: React.FC<AccordionAnimateProps> = ({ icon, details }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AccordionWrapper
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <AccordionIcon>{icon}</AccordionIcon>
            <AccordionText open={isOpen}>{details}</AccordionText>
        </AccordionWrapper>
    );
};

const AccordionIcon = styled.div`
    width: 50px;
    height: 50px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

interface AccordionTextProps {
    open: boolean;
}

const AccordionText = styled.div<AccordionTextProps>`
    max-width: ${({ open }) => (open ? '500px' : '0')};
    overflow: hidden;
    transition: max-width 0.5s ease-in-out;
    white-space: nowrap;
    direction: rtl;
    color: white;
    margin-right: 8px;
    -webkit-text-stroke: 0.5px black;
    display: initial;

    @media (max-width: 768px) {
        display: none;
    }
`;

const AccordionWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    margin-bottom: 16px;

    &:hover ${AccordionText} {
        max-width: 500px;
    }
`;
