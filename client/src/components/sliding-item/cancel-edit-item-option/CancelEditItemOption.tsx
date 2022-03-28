/* React */
import React from 'react';

/* Ionic */
import {
    IonItemOption,
    IonIcon
} from '@ionic/react';

import {
    closeOutline
} from 'ionicons/icons';

/* Stylesheet */
import styles from './CancelEditItemOption.module.scss';

/* Interface(s) */
interface CancelEditItemOptionProps {
    handleSlidingEditInput: Function;
}

const CancelEditItemOption: React.FC<CancelEditItemOptionProps> = ({ handleSlidingEditInput }) => {
    return (
        <IonItemOption
            className={`${styles.item_option} ${styles.cancel_delete}`}
            onClick={
                () => {
                    handleSlidingEditInput({
                        id: 0,
                        show: false
                    });
                }
            }>
            <IonIcon
                className={`${styles.icon} ${styles.edit_icon}`}
                icon={closeOutline}
            />
        </IonItemOption>
    );
};

export default CancelEditItemOption;