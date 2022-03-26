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
    IonList
} from '@ionic/react';


import {
    trashBinOutline,
    createOutline
} from 'ionicons/icons';

/* Model(s) */
import {
    OCRResultModel,
    ResultsModel
} from 'src/shared/models/ocrResultModel';

/* Stylesheet */
import styles from './SlidingItem.module.scss';

/* Interface(s) */
interface SlidingItemProps {
    results: OCRResultModel;
    showSlidingOptions: boolean;
}

const SlidingItem: React.FC<SlidingItemProps> = ({ results, showSlidingOptions }) => {
    const dispatch = useDispatch();

    const renderResults = results.results.map((result: ResultsModel) => {
        return (
            <IonItemSliding
                key={result.id}
                disabled={!showSlidingOptions}>
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
                <IonItemOptions
                    className={styles.sliding_options}
                    side="end">
                    <IonItemOption
                        className={styles.edit}>
                        <IonIcon
                            className={`${styles.icon} ${styles.edit_icon}`}
                            icon={createOutline}
                        />
                    </IonItemOption>
                    <IonItemOption
                        className={styles.delete}
                        onClick={
                            () => {
                                dispatch(deleteResultById(result.id));
                            }
                        }>
                        <IonIcon
                            className={`${styles.icon} ${styles.delete_icon}`}
                            icon={trashBinOutline}
                        />
                    </IonItemOption>
                </IonItemOptions>
            </IonItemSliding>
        );
    });

    return (
        <IonList className={styles.results_container}>
            {renderResults}
        </IonList>
    );
};

export default SlidingItem;