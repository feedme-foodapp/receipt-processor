/* React */
import React, { useEffect } from 'react';

/* React-Redux */
import {
    useSelector,
    useDispatch
} from 'react-redux';

import {
    handleShow
} from 'src/redux/features/toastSlice';

/* Ionic */
import {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonButton
} from '@ionic/react';

import {
    closeOutline
} from 'ionicons/icons';

/* Model(s) */
import {
    RootState
} from 'src/redux/store';

/* Stylesheet */
import styles from './ToastContainer.module.scss';

const ToastContainer: React.FC = () => {
    const dispatch = useDispatch();
    const toastState = useSelector((state: RootState) => state.toast);

    useEffect(() => {
        setTimeout(() => {
            dispatch(handleShow(false));
        }, 5000);
    });

    const renderToastContainer = () => {
        if (toastState.show) {
            return (
                <div className={styles.toast_container}>
                    <div
                        style={{ background: toastState.content.color }}
                        className={styles.toast}>
                        <IonGrid className={styles.grid_container}>
                            <IonRow>
                                <IonCol
                                    className={styles.col}
                                    size="1">
                                    <IonIcon
                                        className={styles.icon}
                                        icon={toastState.content.icon}
                                    />
                                </IonCol>
                                <IonCol
                                    className={styles.col}
                                    size="10">
                                    <div className={styles.message}>
                                        {toastState.content.message}
                                    </div>
                                </IonCol>
                                <IonCol
                                    className={styles.col}
                                    size="1">
                                    <IonButton
                                        className={styles.btn}
                                        onClick={
                                            () => {
                                                dispatch(handleShow(false));
                                            }
                                        }>
                                        <IonIcon
                                            className={styles.icon}
                                            icon={closeOutline}
                                        />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </div>
                </div>
            )
        } else {
            return undefined;
        }
    }

    return (
        <React.Fragment>
            {renderToastContainer()}
        </React.Fragment>
    );
};

export default ToastContainer;