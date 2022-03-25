/* React */
import React, { useState } from 'react';

/* Ionic */
import {
    IonFabButton,
    IonIcon
} from '@ionic/react';

import {
    chevronUp,
    chevronDown,
    documentOutline
} from 'ionicons/icons';

/* Component(s) */
import Illustrator from 'src/components/shared/illustrator/Illustrator';

/* Stylesheet */
import styles from './DynamicLabel.module.scss';

/* Interface(s) */
interface OCRDynamicLabelProps {
    label: string;
    initialValue: boolean;
    children: React.ReactNode;
    showFilter: boolean;
    showIllustrator: boolean;
}

const OCRDynamicLabel: React.FC<OCRDynamicLabelProps> = ({
    label,
    initialValue,
    children,
    showFilter,
    showIllustrator
}) => {

    // showDynamicContent
    const [showDynamicContent, setShowDynamicContent] = useState<boolean>(initialValue);

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
                            setShowDynamicContent(!showDynamicContent);
                            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                            // handleIllustrator ? handleIllustrator(showDynamicContent ? true : false) : undefined;
                        }
                    }>
                    <IonIcon
                        className={`${styles.icon} ${styles.chevron_icon}`}
                        icon={showDynamicContent ? chevronUp : chevronDown}
                    />
                </IonFabButton>
            </div>
            {showDynamicContent && (
                <div className={styles.child_container}>
                    {children}
                </div>
            )}
            {!showDynamicContent && showIllustrator && (
                <div className={styles.illustrator_container}>
                    <Illustrator
                        icon={documentOutline}
                        iconHeight={'108px'}
                        title={'List of OCR results'}
                        showDots={false}
                        animation={false}
                    />
                </div>
            )}
        </div>
    );
};

export default OCRDynamicLabel;