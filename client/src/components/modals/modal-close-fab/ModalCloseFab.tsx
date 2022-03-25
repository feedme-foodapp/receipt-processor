/* React */
import React from 'react';

/* Ionic */
import {
    IonFab,
    IonFabButton,
    IonIcon
} from '@ionic/react';

import {
    closeOutline
} from 'ionicons/icons';

/* Stylesheet */
import styles from './ModalCloseFab.module.scss';

/* Interface(s) */
interface ModalCloseFabProps {
    handleModal: Function;
}

const ModalCloseFab: React.FC<ModalCloseFabProps> = ({ handleModal }) => {
    return (
        <IonFab
            className={styles.fab_container}
            horizontal="end"
            vertical="top">
            <IonFabButton
                className={styles.fab_btn}
                size="small"
                onClick={
                    () => {
                        handleModal(false);
                    }
                }>
                <IonIcon 
                    className={styles.icon}
                    icon={closeOutline}
                />
            </IonFabButton>
        </IonFab>
    );
};

export default ModalCloseFab;