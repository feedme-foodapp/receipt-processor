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
    IonItemOption,
    IonIcon
} from '@ionic/react';

import {
    trashBinOutline
} from 'ionicons/icons';

/* Model(s) */
import {
    ResultModel 
} from 'src/shared/models/ocrResultModel';

/* Stylesheet */
import styles from './DeleteItemOption.module.scss';

/* Interface(s) */
interface DeleteItemOptionProps {
    result: ResultModel;
}

const DeleteItemOption: React.FC<DeleteItemOptionProps> = ({ result }) => {
    const dispatch = useDispatch();

    return (
        <IonItemOption
            className={styles.delete_option}
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
    );
};

export default DeleteItemOption;