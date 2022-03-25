/* React */
import React from 'react';

/* Ionic */

/* Interface(s) */
interface ModalContainerWrapperProps {
    children: React.ReactNode;
}

const ModalContainerWrapper: React.FC<ModalContainerWrapperProps> = ({ children }) => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
};

export default ModalContainerWrapper;