/* React */
import React from 'react';

/* Ionic */
import {
    IonButton,
    IonIcon
} from '@ionic/react';

import {
    analyticsOutline
} from 'ionicons/icons';

/* Component(s) */

/* Stylesheet */
import styles from './ResultsContainer.module.scss';

/* Interface(s) */
interface ResultsContainerProps {
    receipt: string;
}

const ResultsContainer: React.FC<ResultsContainerProps> = ({ receipt }) => {
    return (
        <div className={styles.results_container}>
            <div className={styles.flex_container}>
                <div className={styles.btn_container}>
                    <div className={styles.label_container}>
                        <div style={{color: !receipt ? '#cbced4' : '#30394a'}}>Push <span style={{color: !receipt ? '' : 'var(--ion-color-secColor)'}}>Analyze</span> to start Optical Character Recognition</div>
                    </div>
                    <IonButton
                        className={styles.btn}
                        expand="block"
                        disabled={!receipt ? true : false}>
                        <IonIcon 
                            className={styles.icon}
                            icon={analyticsOutline} 
                        />
                        Analyze
                    </IonButton>
                </div>
            </div>
        </div>
    );
};

export default ResultsContainer;