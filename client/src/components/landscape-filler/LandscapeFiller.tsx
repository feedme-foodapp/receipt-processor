/* React */
import React from 'react';

/* Ionic */
import {
    IonIcon
} from '@ionic/react';

/* Stylesheet */
import styles from './LandscapeFiller.module.scss';

const LandscapeFiller: React.FC = () => {
    return (
        <div className={styles.landscape_filler_container}>
            <div className={styles.block_container}>
                <IonIcon className={styles.icon} icon={'/assets/icon/smartphone.svg'} />
            </div> 
        </div>
    );
};

export default LandscapeFiller;