import React from 'react';
import { Header } from '../components/Header';
import { Angle } from '../components/Angle';
import { ProjectView } from '../components/ProjectView';

export const Projects: React.FC = () => {
    return (
        <>
            <Header />
            <Angle />
            <ProjectView />
        </>
    );
};
