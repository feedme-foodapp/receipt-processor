/* React */
import React from 'react';

/* Stylesheet */
import styles from './EmptyContainer.module.scss';

/* Interface(s) */
interface EmptyContainerProps {
    title: string;
}

const CardHeader: React.FC<EmptyContainerProps> = ({ title }) => {
    return (
        <div className={styles.empty_container}>
            
        </div>
    );
};

export default CardHeader;