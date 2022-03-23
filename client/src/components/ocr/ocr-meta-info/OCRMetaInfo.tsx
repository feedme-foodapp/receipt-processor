/* React */
import React from 'react';

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
                Confidence: {metaInfo.confidence}
            </div>
            <div className={`${styles.info}`}>
                Lines:  {metaInfo.lines}
            </div>
            <div className={`${styles.info}`}>
                Words: {metaInfo.words}
            </div>
        </div>
    );
};

export default OCRMetaInfo;