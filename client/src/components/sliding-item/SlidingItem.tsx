/* React */
import React, { useState, useRef } from 'react';

/* Ionic */
import {
    IonItem,
    IonItemSliding,
    IonItemOptions,
    IonList
} from '@ionic/react';

/* Model(s) */
import {
    OCRResultModel,
    ResultModel
} from 'src/shared/models/ocrResultModel';

/* Component(s) */
import SlidingEditInput from 'src/components/sliding-item/sliding-edit-input/SlidingEditInput';
import ConfirmEditItemOption from 'src/components/sliding-item/confirm-edit-item-option/ConfirmEditItemOption';
import CancelEditItemOption from 'src/components/sliding-item/cancel-edit-item-option/CancelEditItemOption';
import EditItemOption from 'src/components/sliding-item/edit-item-option/EditItemOption';
import DeleteItemOption from 'src/components/sliding-item/delete-item-option/DeleteItemOption';

/* Stylesheet */
import styles from './SlidingItem.module.scss';

/* Interface(s) */
interface SlidingItemProps {
    result: OCRResultModel;
    showSlidingOptions: boolean;
}

interface SlidingEditInputModel {
    id: number;
    show: boolean;
}

const SlidingItem: React.FC<SlidingItemProps> = ({ result, showSlidingOptions }) => {
    const slidingItemRef: any = useRef();

    // slidingEditInput
    const defaultSlidingEditInput: SlidingEditInputModel = {
        id: 0,
        show: false
    };

    const [slidingEditInput, setSlidingEditInput] = useState<SlidingEditInputModel>(defaultSlidingEditInput);

    const handleSlidingEditInput = (value: SlidingEditInputModel) => {
        setSlidingEditInput(value);
    };

    const validSlidingEditInput = (result: ResultModel) => {
        if (slidingEditInput.id === result.id && slidingEditInput.show) {
            return true;
        } else {
            return false;
        }
    };

    // editResult
    const defaultEditResult: ResultModel = {
        id: 0,
        text: '',
        confidence: 0,
        bbox: {
            x0: 0,
            x1: 0,
            y0: 0,
            y1: 0
        }
    };

    const [editResult, setEditResult] = useState<ResultModel>(defaultEditResult);

    const handleEditResult = (result: ResultModel) => {
        setEditResult(result);
    };

    const renderResults = result.lines.map((result: ResultModel) => {
        return (
            <IonItemSliding
                key={result.id}
                ref={slidingItemRef}
                style={{
                    borderRadius: '8px'
                }}
                disabled={!showSlidingOptions}>
                <IonItem
                    style={{
                        '--padding-start': validSlidingEditInput(result) ? '0' : '16px'
                    }}
                    className={styles.line_item}
                    lines="none">
                    <div className={styles.line}>
                        <div className={`${styles.text} primary-text`}>
                            {result.text}
                        </div>
                        <div className={`${styles.confidence} primary-text`}>
                            {result.confidence} %
                        </div>
                    </div>
                    {validSlidingEditInput(result) && (
                        <SlidingEditInput
                            editResult={editResult}
                            handleEditResult={handleEditResult}
                        />
                    )}
                </IonItem>
                <IonItemOptions
                    className={styles.sliding_options}
                    side="end">
                    {validSlidingEditInput(result) ? (
                        <React.Fragment>
                            <ConfirmEditItemOption
                                editResult={editResult}
                                handleSlidingEditInput={handleSlidingEditInput}
                            />
                            <CancelEditItemOption
                                handleSlidingEditInput={handleSlidingEditInput}
                            />
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <EditItemOption
                                result={result}
                                handleEditResult={handleEditResult}
                                handleSlidingEditInput={handleSlidingEditInput}
                            />
                            <DeleteItemOption
                                result={result}
                            />
                        </React.Fragment>
                    )}
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