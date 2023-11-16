import React from 'react';
import './cv.css';

const CV: React.FC = () => {
    return (
        <div className='cv'>
            <iframe id="cv_section" src="./CV.pdf"></iframe>
        </div>
    );
}

export default CV;
