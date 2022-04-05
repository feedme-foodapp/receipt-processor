/* React */
import React from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    addResult
} from 'src/redux/features/ocrResultSlice';

/* Ionic */
import {
    IonButton,
    IonIcon
} from '@ionic/react';

import {
    analyticsOutline
} from 'ionicons/icons';

/* Service(s) */
import {
    ServiceLoader
} from 'src/shared/services/service-loader';

/* Util(s) */
import {
    createResultObject
} from 'src/utils/helper/ocrResult';

/* Stylesheet */
import styles from './OCRRecognition.module.scss';

/* Interface(s) */
interface OCRRecognitionProps {
    receipt: string;
    handleIsProcessing: Function;
}

const OCRRecognition: React.FC<OCRRecognitionProps> = ({ receipt, handleIsProcessing }) => {
    const dispatch = useDispatch();

    const addToResultsState = (result: any) => {
        dispatch(addResult(createResultObject(result, )));
    };

    return (
        <div className={styles.ocr_recognition_container}>
            <div className={styles.label_container}>
                <div style={{ color: !receipt ? '#d2d7e2' : '#30394a' }}>Push <span style={{ color: !receipt ? '' : 'var(--ion-color-secondColor)' }}>Analyze</span> to start Optical Character Recognition</div>
            </div>
            <IonButton
                className={styles.btn}
                expand="block"
                disabled={!receipt ? true : false}
                onClick={
                    () => {
                        handleIsProcessing(true);
                        ServiceLoader.tesseract().recognize(receipt).then((result: any) => {
                            addToResultsState(result);
                            handleIsProcessing(false);
                        });
                    }
                }>
                <IonIcon
                    className={styles.icon}
                    icon={analyticsOutline}
                />
                Analyze
            </IonButton>
        </div>
    );
};

export default OCRRecognition;