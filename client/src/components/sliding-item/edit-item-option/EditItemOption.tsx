/* React */
import React from 'react';

/* Ionic */
import {
    IonItemOption,
    IonIcon
} from '@ionic/react';

import {
    createOutline
} from 'ionicons/icons';

/* Model(s) */
import {
    ResultModel 
} from 'src/shared/models/ocrResultModel';

/* Stylesheet */
import styles from './EditItemOption.module.scss';

/* Interface(s) */
interface EditItemOptionProps {
    result: ResultModel;
    handleEditResult: Function;
    handleSlidingEditInput: Function;
}

const EditItemOption: React.FC<EditItemOptionProps> = ({
    result,
    handleEditResult,
    handleSlidingEditInput
}) => {
    return (
        <IonItemOption
            className={`${styles.item_option} ${styles.edit}`}
            onClick={
                () => {
                    handleSlidingEditInput({
                        id: result.id,
                        show: true
                    });
                    handleEditResult(result);
                }
            }>
            <IonIcon
                className={`${styles.icon} ${styles.edit_icon}`}
                icon={createOutline}
            />
        </IonItemOption>
    );
};

export default EditItemOption;