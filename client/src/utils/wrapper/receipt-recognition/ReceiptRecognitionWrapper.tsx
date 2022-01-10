/* React */
import React from 'react';

/* Ionic */
import {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard
} from '@ionic/react';

/* Stylesheet */
import styles from './ReceiptRecognitionWrapper.module.scss';

/* Interface(s) */
interface RecognitionWrapperProps {
    children: React.ReactNode[];
}

const ReceiptRecognitionWrapper: React.FC<RecognitionWrapperProps> = ({ children }) => {
    return (
        <IonContent>
            <IonGrid className={styles.grid_container}>
                <IonRow className={styles.row}>
                    <IonCol
                        className={`${styles.col}`}
                        sizeXs="12"
                        sizeXl="6">
                        <IonCard className={`${styles.card}`}>
                            {children[0]}
                        </IonCard>
                    </IonCol>
                    <IonCol
                        className={`${styles.col}`}
                        sizeXs="12"
                        sizeXl="6">
                        <IonCard className={`${styles.card}`}>
                            {children[1]}
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default ReceiptRecognitionWrapper;