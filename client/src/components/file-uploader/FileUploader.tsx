/* React */
import React from 'react';

/* Ionic */
import {
    IonFab,
    IonFabButton,
    IonIcon
} from '@ionic/react';

import {
    cameraOutline
} from 'ionicons/icons';

/* Stylesheet */
import styles from './FileUploader.module.scss';

const FileUploader: React.FC = () => {
    return (
        <IonFab
            className={styles.fab_container}
            horizontal="end"
            vertical="bottom">
            <IonFabButton
                className={styles.fab_btn}>
                <IonIcon className={styles.icon}icon={cameraOutline} />
            </IonFabButton>
        </IonFab>
    )
}

export default FileUploader;