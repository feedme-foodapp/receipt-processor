/* React */
import React from 'react';

/* Ionic */
import {
    IonInput
} from '@ionic/react';

/* Model(s) */
import {
    ResultModel
} from 'src/shared/models/ocrResultModel';

/* Stylesheet */
import styles from './SlidingEditInput.module.scss';

/* Interface(s) */
interface SlidingEditInputProps {
    editResult: ResultModel;
    handleEditResult: Function;
}

const SlidingEditInput: React.FC<SlidingEditInputProps> = ({ editResult, handleEditResult }) => {
    return (
        <div className={styles.sliding_edit_input_container}>
            <IonInput
                className={styles.sliding_edit_input}
                placeholder={editResult.text}
                onIonChange={
                    (e) => {
                        handleEditResult({...editResult, text: e.detail.value?.trim()});
                    }
                }
            />
        </div>
    );
};

export default SlidingEditInput;