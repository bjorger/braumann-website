import React from 'react';
import { Angle } from './components/Angle';
import { Cloud } from './components/Cloud';

function App() {
    return (
        <div className="w-full h-screen max-h-screen overflow-hidden bg-custom-primary">
            <Angle />
            <Cloud positionX={1000} positionY={500} />
        </div>
    );
}

export default App;

//TODO Animated man sitting in headline

//TODO Lead covering text and is "blown away" on page opening
