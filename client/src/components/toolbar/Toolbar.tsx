/* React */
import React from 'react';

/* Ionic */
import {
    IonHeader,
    IonToolbar,
    IonMenuButton,
} from '@ionic/react';

/* Stylesheet */
import styles from './Toolbar.module.scss';

const Toolbar: React.FC = () => {
    return (
        <IonHeader className={styles.header}>
            <IonToolbar className={styles.toolbar}>
                <IonMenuButton className={styles.menu_btn} slot="start" />
                <div className={styles.label_container}>
                    <span>feed</span>Me
                </div>
            </IonToolbar>
        </IonHeader>
    );
};

export default Toolbar;