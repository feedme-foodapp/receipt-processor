/* React */
import React from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    deleteResultById
} from 'src/redux/features/ocrResultSlice';

/* Ionic */
import {
    IonItem,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonFabButton,
    IonList
} from '@ionic/react';

import {
    trashBinOutline
} from 'ionicons/icons';

/* Model(s) */
import {
    OCRResultModel,
    ResultsModel
} from 'src/shared/models/ocrResultModel';

/* Component(s) */
import DynamicLabel from 'src/components/dynamic-label/DynamicLabel';
import OCRMetaInfo from 'src/components/ocr/ocr-meta-info/OCRMetaInfo';

/* Stylesheet */
import styles from './OCRResults.module.scss';

/* Interface(s) */
interface OCRResultsProps {
    results: OCRResultModel;
}

const OCRResults: React.FC<OCRResultsProps> = ({ results }) => {
    const dispatch = useDispatch();
    
    const renderResults = results.results.map((result: ResultsModel) => {
        return (
            <IonItemSliding key={result.id}>
                <IonItem
                    className={styles.line_item}
                    lines="none">
                    <div className={styles.line}>
                        <div className={styles.text}>
                            {result.text}
                        </div>
                        <div className={styles.confidence}>
                            {result.confidence} %
                        </div>
                    </div>
                </IonItem>
                <IonItemOptions className={styles.sliding_option_container}>
                    <IonItemOption 
                        className={styles.sliding_option}
                        onClick={
                            () => {
                                dispatch(deleteResultById(result.id));
                            }
                        }>
                        <IonIcon 
                            className={styles.icon}
                            icon={trashBinOutline} 
                        />
                    </IonItemOption>
                </IonItemOptions>
            </IonItemSliding>
        );
    });

    return (
        <div
            style={{
                margin: results ? '0px 0px 0px 0px' : '42px 0px 42px 0px'
            }}
            className={styles.ocr_results_container}>
            <div className={styles.title_container}>
                <div className={styles.flex_container}>
                    <IonIcon
                        className={styles.title_icon}
                        icon={'/assets/icon/ocr.svg'}
                    />
                    <h1 className={styles.title}>
                        Receipt Results
                    </h1>
                    <IonFabButton className={styles.fab_btn}>
                        <IonIcon
                            className={styles.modal_icon}
                            icon={'/assets/icon/modal.svg'}
                        />
                    </IonFabButton>
                </div>
            </div>
            <DynamicLabel
                label={'Meta-Info'}
                initialValue={true}
                showFilter={false}>
                <OCRMetaInfo metaInfo={results.metaInfo} />
            </DynamicLabel>
            <DynamicLabel
                label={'Recognized-Text'}
                initialValue={false}
                showFilter={true}>
                <IonList className={styles.results_container}>
                    {renderResults}
                </IonList>
            </DynamicLabel>
        </div>
    );
};

export default OCRResults;