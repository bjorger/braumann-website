import React from 'react';
import styled from 'styled-components';

export const Intro: React.FC = () => {
    return (
        <StyledContainer className="absolute text-white z-50">
            <StyledHeadline className="text-3xl my-8">Meet Robin Braumann</StyledHeadline>
            <div>
                <StyledGradientParagraph>
                    A masterful Web Developer who excels in transforming ideas into dynamic,
                    user-centric websites. With an extensive skill set spanning front-end
                    technologies like React and NextJS to back-end solutions using NestJS,{' '}
                </StyledGradientParagraph>
                <br />
                <StyledGradientParagraph>
                    Robin creates immersive web experiences. He's not just a developer, he's a
                    digital craftsman shaping the web, one site at a time. Invest in quality and
                    innovation; choose Robin for your web development needs.
                </StyledGradientParagraph>
            </div>
        </StyledContainer>
    );
};

const StyledHeadline = styled.h1`
    -webkit-text-stroke: 0.5px black;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const StyledContainer = styled.div`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const StyledGradientParagraph = styled.p`
    border-left: 5px solid #ea7185;
    padding-left: 5px;
    -webkit-text-stroke: 0.5px black;
    font-size: 20px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;
