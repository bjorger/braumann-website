import React from 'react';
import { Intro } from '../components/Intro';
import { Header } from '../components/Header';
import { Angle } from '../components/Angle';

export const Introduction: React.FC = () => {
    return (
        <>
            <Header />
            <Angle />
            <Intro />
        </>
    );
};
