import React from 'react';
import { FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa6';
import { AccordionItem } from './AccordionItem';
export const Header: React.FC = () => {
    return (
        <div className="absolute top-8 right-8 z-50">
            <AccordionItem
                icon={
                    <a href="mailto:robin.braumann@gmail.com">
                        <FaEnvelope fill="#EA7185" size="40px" />
                    </a>
                }
                details={'robin.braumann@gmail.com'}
            />
            <AccordionItem
                icon={
                    <a href="tel:+436805034612">
                        <FaPhone fill="#EA7185" size="40px" />
                    </a>
                }
                details={'\u202A+43 680 5034612\u202C'}
            />
            <AccordionItem
                icon={
                    <a href="https://github.com/bjorger" target="_blank" rel="noreferrer">
                        <FaGithub fill="#EA7185" size="40px" />
                    </a>
                }
                details={'bjorger'}
            />
        </div>
    );
};
