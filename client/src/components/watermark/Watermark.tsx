/* React */
import React from 'react';

/* Stylesheet */
import styles from './Watermark.module.scss';

const Watermark: React.FC = () => {
    return (
        <div className={styles.watermark_container}>
            <img 
                className={styles.logo} 
                src={'/assets/img/logo.svg'} 
                alt="Logo" 
            />
            <div className={styles.label_container}>
                a <span>feedMe</span> product
            </div>
        </div>
    );
};

export default Watermark;