/* React */
import React from 'react';

/* Ionic */
import {
    IonIcon,
    IonFabButton,
    IonList
} from '@ionic/react';

/* Component(s) */
import DynamicLabel from 'src/components/dynamic-label/DynamicLabel';
import OCRMetaInfo from 'src/components/ocr/ocr-meta-info/OCRMetaInfo';
import SlidingItem from 'src/components/sliding-item/SlidingItem';

/* Stylesheet */
import styles from './OCRResult.module.scss';

/* Interface(s) */
interface OCRResultProps {
    result: any;
    isModal: boolean;
    handleModal: Function;
    showSlidingOptions: boolean;
}

const OCRResult: React.FC<OCRResultProps> = ({
    result,
    isModal,
    handleModal,
    showSlidingOptions,
}) => {
    return (
        <div className={styles.ocr_result_container}>
            <div className={isModal ? styles.block_modal_container : styles.block_container}>
                <div className={styles.title_container}>
                    <div className={styles.flex_container}>
                        <IonIcon
                            className={styles.title_icon}
                            icon={'/assets/icon/ocr.svg'}
                        />
                        <h1 className={styles.title}>
                            Receipt Results
                        </h1>
                        {!isModal && (
                            <IonFabButton
                                className={styles.fab_btn}
                                onClick={
                                    () => {
                                        handleModal(true);
                                    }
                                }>
                                <IonIcon
                                    className={styles.modal_icon}
                                    icon={'/assets/icon/modal.svg'}
                                />
                            </IonFabButton>
                        )}
                    </div>
                </div>
                <DynamicLabel
                    label={'Meta-Info'}
                    initialValue={false}
                    resultFilter={false}
                    showIllustrator={false}>
                    <OCRMetaInfo metaInfo={result.metaInfo} />
                </DynamicLabel>
                <DynamicLabel
                    label={'Recognized-Text'}
                    initialValue={true}
                    resultFilter={true}
                    showIllustrator={true}>
                    <IonList className={styles.result_container}>
                        <SlidingItem
                            result={result}
                            showSlidingOptions={showSlidingOptions}
                        />
                    </IonList>
                </DynamicLabel>
            </div>
        </div>
    );
};

export default OCRResult;