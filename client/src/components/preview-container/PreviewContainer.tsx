/* React */
import React from 'react';

/* Component(s) */
import Illustrator from 'src/components/illustrator/Illustrator';
import ReceiptSettingsFab from 'src/components/receipt-settings-fab/ReceiptSettingsFab';
import LandscapeFiller from 'src/components/landscape-filler/LandscapeFiller';

/* Stylesheet */
import styles from './PreviewContainer.module.scss';

/* Interface(s) */
interface PreviewContainerProps {
    receipt: string;
}

const PreviewContainer: React.FC<PreviewContainerProps> = ({ receipt }) => {
    return (
        <React.Fragment>
            <div className={styles.preview_container}>
                {receipt ? (
                    <React.Fragment>
                        <img
                            className={styles.receipt}
                            src={receipt}
                            alt="receipt"
                        />
                        <ReceiptSettingsFab />
                    </React.Fragment>
                ) : (
                    <Illustrator
                        icon={'/assets/icon/image2.svg'}
                        title={'No preview to show yet'}
                        animation={false}
                    />
                )}
            </div>
            <LandscapeFiller />
        </React.Fragment>
    );
};

export default PreviewContainer;