/* React */
import React from 'react';

/* React-Redux */
import  {
    useDispatch
} from 'react-redux';

import {
    updateResult
} from 'src/redux/features/ocrResultSlice';

/* Ionic */
import {
    IonItemOption,
    IonIcon
} from '@ionic/react';

import {
    checkmarkOutline
} from 'ionicons/icons';

/* Model(s) */
import { 
    ResultModel 
} from 'src/shared/models/ocrResultModel';

/* Stylesheet */
import styles from './ConfirmEditItemOption.module.scss';

/* Interface(s) */
interface ConfirmEditItemOptionProps {
    editResult: ResultModel;
    handleSlidingEditInput: Function;
}

const ConfirmEditItemOption: React.FC<ConfirmEditItemOptionProps> = ({ editResult, handleSlidingEditInput }) => {
    const dispatch = useDispatch();

    return (
        <IonItemOption
            className={`${styles.item_option} ${styles.confirm}`}
            onClick={
                () => {
                    dispatch(updateResult(editResult));
                    handleSlidingEditInput({
                        id: 0,
                        show: false
                    });
                }
            }>
            <IonIcon
                className={`${styles.icon}`}
                icon={checkmarkOutline}
            />
        </IonItemOption>
    );
};

export default ConfirmEditItemOption;