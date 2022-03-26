/* React */
import React, { useEffect, useRef } from 'react';

/* Ionic */
import {
    IonContent,
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/react';

/* Util(s) */
import { styleScrollbars } from 'src/utils/helper/scrollbar';

/* Stylesheet */
import styles from './ModalContainerWrapper.module.scss';

/* Interface(s) */
interface ModalContainerWrapperProps {
    children: React.ReactNode[];
}

const ModalContainerWrapper: React.FC<ModalContainerWrapperProps> = ({ children }) => {
    const ionContentRef: any = useRef();

    useEffect(() => {
        styleScrollbars(ionContentRef.current);
    }, []);

    return (
        <IonContent ref={ionContentRef}>
            <IonGrid className={styles.grid_container}>
                <IonRow className={styles.row}>
                    <IonCol
                        className={`${styles.col}`}
                        sizeXs="12"
                        sizeSm="12"
                        sizeMd="12"
                        sizeLg="6">
                        {children[0]}
                    </IonCol>
                    <IonCol
                        className={`${styles.col}`}
                        sizeXs="12"
                        sizeSm="12"
                        sizeMd="12"
                        sizeLg="6">
                        {children[1]}
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default ModalContainerWrapper;