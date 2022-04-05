/* React */
import React, { useEffect, useState } from 'react';

/* React-Redux */
import {
    useSelector,
    useDispatch 
} from 'react-redux';

import {
    setFilter
} from 'src/redux/features/ocrResultSlice';

/* Ionic */
import {
    IonItem,
    IonFabButton,
    IonIcon,
    IonCheckbox
} from '@ionic/react';

import {
    closeOutline
} from 'ionicons/icons';

/* Model(s) */
import {
    RootState
} from 'src/redux/store';

/* Stylesheet */
import styles from './OCRResultFilter.module.scss';

/* Interface(s) */
interface OCRResultFilterProps {
    showResultFilter: boolean;
    handleResultFilter: Function;
}

interface FilterModel {
    lines: boolean;
    words: boolean;
}

const OCRResultFilter: React.FC<OCRResultFilterProps> = ({
    showResultFilter,
    handleResultFilter
}) => {

    const resultState = useSelector((state: RootState) => state.ocrResults.ocrResults);
    const dispatch = useDispatch();

    // filter
    const [tmpFilter, setTmpFilter] = useState<any>({
        // lines: resultState.filter.lines,
        // words: resultState.filter.words
    });
    
    const handleFilter = (e: any) => {
        setTmpFilter({
            ...tmpFilter,
            [e.target.name]: e.detail.checked
        });
    };
    
    useEffect(() => {
        dispatch(setFilter(tmpFilter));
    }, [dispatch, tmpFilter]);

    return (
        <React.Fragment>
            {showResultFilter && (
                <div className={styles.ocr_result_selector_container}>
                    <div className={styles.header_container}>
                        <div className={`${styles.label} primary-text`}>
                            Result-Filter
                        </div>
                        <IonFabButton
                            className={styles.fab_btn}
                            size="small"
                            onClick={
                                () => {
                                    handleResultFilter(false);
                                }
                            }>
                            <IonIcon
                                className={styles.icon}
                                icon={closeOutline}
                            />
                        </IonFabButton>
                    </div>
                    <div className={styles.item_container}>
                        <IonItem
                            className={styles.item}
                            lines="none">
                            <IonCheckbox
                                name="lines"
                                checked={tmpFilter.lines}
                                onIonChange={handleFilter}
                            />
                            <div className={`${styles.label} primary-text`}>
                                Lines
                            </div>
                        </IonItem>
                        <IonItem
                            className={styles.item}
                            lines="none">
                            <IonCheckbox
                                name="words"
                                checked={tmpFilter.words}
                                onIonChange={handleFilter}
                            />
                            <div className={`${styles.label} primary-text`}>
                                Words
                            </div>
                        </IonItem>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default OCRResultFilter;