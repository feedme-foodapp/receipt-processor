/* React */
import React from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    setReceipt
} from 'src/redux/features/receiptSlice';

/* Ionic */
import {
    IonFab,
    IonFabButton,
    IonIcon
} from '@ionic/react';

import {
    cameraOutline
} from 'ionicons/icons';

/* Capacitor */
import { 
    Camera, 
    CameraSource, 
    CameraResultType 
} from '@capacitor/camera';

/* Stylesheet */
import styles from './FileUploader.module.scss';

const FileUploader: React.FC = () => {
    const dispatch = useDispatch();

    const takePicture = async () => {
        try {
            const image = await Camera.getPhoto({
                resultType: CameraResultType.DataUrl,
                source: CameraSource.Camera,
                quality: 100
            });

            if(image.dataUrl) {
                dispatch(setReceipt(image.dataUrl));
            }
        } catch(error) {
            console.log(error);
        }
    };

    return (
        <IonFab
            className={styles.fab_container}
            horizontal="end"
            vertical="bottom"
            onClick={
                () => {
                    takePicture();
                }
            }>
            <IonFabButton
                className={styles.fab_btn}>
                <IonIcon 
                    className={styles.icon }
                    icon={cameraOutline} 
                />
            </IonFabButton>
        </IonFab>
    );
};

export default FileUploader;