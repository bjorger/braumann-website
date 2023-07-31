import React from 'react';
import styled from 'styled-components';

export const Intro: React.FC = () => {
    return (
        <StyledContainer className="absolute text-white z-40">
            <StyledHeadline className="text-3xl my-8">Meet Robin Braumann</StyledHeadline>
            <div>
                <StyledGradientParagraph>
                    I am Robin, a seasoned web developer, skilled at turning your ideas into
                    dynamic, user-oriented websites. My expertise covers a range of technologies
                    from React and NextJS for front-end development to NestJS for back-end
                    solutions.
                </StyledGradientParagraph>
                <br />
                <StyledGradientParagraph>
                    By choosing my services, you're opting for quality and innovation. I don't just
                    code websites; I craft bespoke digital experiences. Trust in my abilities to
                    create a distinctive online presence tailored to your unique needs. Let's
                    collaborate to bring your vision to life on the web.
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
