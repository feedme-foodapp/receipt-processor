/* React */
import React from 'react';

/* Ionic */
import {
    IonIcon
} from '@ionic/react';

/* Model(s) */
import {
    MetaInfoModel
} from 'src/shared/models/ocrResultModel';

/* Stylesheet */
import styles from './OCRMetaInfo.module.scss';

/* Interface(s) */
interface OCRMetaInfoProps {
    metaInfo: MetaInfoModel;
}

const OCRMetaInfo: React.FC<OCRMetaInfoProps> = ({ metaInfo }) => {
    return (
        <div className={styles.meta_info_container}>
            <div className={`${styles.info}`}>
                <IonIcon
                    className={styles.icon}
                    icon={'/assets/icon/percent.svg'}
                />
                <span className={styles.label}>Confidence:</span> {metaInfo.confidence}
            </div>
            <div className={`${styles.info}`}>
                <IonIcon
                    className={styles.icon}
                    icon={'/assets/icon/sigma.svg'}
                />
                <span className={styles.label}>Lines:</span>  {metaInfo.lines}
            </div>
            <div className={`${styles.info}`}>
                <IonIcon
                    className={styles.icon}
                    icon={'/assets/icon/sigma.svg'}
                />
                <span className={styles.label}>Words:</span> {metaInfo.words}
            </div>
        </div>
    );
};

export default OCRMetaInfo;