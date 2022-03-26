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

/* Stylesheet */
import styles from './OCRRecognition.module.scss';

/* Interface(s) */
interface OCRRecognitionProps {
    receipt: string;
    handleIsProcessing: Function;
}

const OCRRecognition: React.FC<OCRRecognitionProps> = ({ receipt, handleIsProcessing }) => {
    const dispatch = useDispatch();

    const addToResultsState = (results: any) => {
        const tmpOcrResults = {
            metaInfo: {
                lines: results.lines.length,
                words: results.words.length,
                confidence: results.confidence
            },
            //@ts-ignore
            results: []
        };

        // eslint-disable-next-line array-callback-return
        results.lines.map((line: any, index: number) => {
            tmpOcrResults.results.push({
                //@ts-ignore
                id: index,
                //@ts-ignore
                text: line.text,
                //@ts-ignore
                confidence: line.confidence
            })
        });
        dispatch(addResult(tmpOcrResults));
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
                        ServiceLoader.tesseract().recognize(receipt).then((results: any) => {
                            addToResultsState(results);
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