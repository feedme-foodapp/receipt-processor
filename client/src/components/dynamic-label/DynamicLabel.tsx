/* React */
import React, { useState } from 'react';

/* Ionic */
import {
    IonFabButton,
    IonIcon
} from '@ionic/react';

import {
    chevronUp,
    chevronDown
} from 'ionicons/icons';

/* Stylesheet */
import styles from './DynamicLabel.module.scss';

/* Interface(s) */
interface OCRDynamicLabelProps {
    label: string;
    initialValue: boolean;
    children: React.ReactNode;
    showFilter: boolean;
}

const OCRDynamicLabel: React.FC<OCRDynamicLabelProps> = ({
    label,
    initialValue,
    children,
    showFilter
}) => {

    // showMetaInfo
    const [showMetaInfo, setShowMetaInfo] = useState<boolean>(initialValue);

    return (
        <div className={styles.dynamic_label_container}>
            <div className={styles.label_container}>
                <h4 className={styles.label}>
                    {label}
                </h4>
                {showFilter && (
                    <IonFabButton
                        className={`${styles.fab_btn} ${styles.filter_fab_btn}`}
                        size="small">
                        <IonIcon
                            className={`${styles.icon} ${styles.settings_icon}`}
                            icon={'/assets/icon/filter.svg'}
                        />
                    </IonFabButton>
                )}
                <IonFabButton
                    className={`${styles.fab_btn} ${styles.chevron_fab_btn}`}
                    size="small"
                    onClick={
                        () => {
                            setShowMetaInfo(!showMetaInfo);
                        }
                    }>
                    <IonIcon
                        className={`${styles.icon} ${styles.chevron_icon}`}
                        icon={showMetaInfo ? chevronUp : chevronDown}
                    />
                </IonFabButton>
            </div>
            {showMetaInfo && (
                <div className={styles.child_container}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default OCRDynamicLabel;