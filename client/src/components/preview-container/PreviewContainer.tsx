/* React */
import React from 'react';

/* Component(s) */
import EmptyContainer from 'src/components/empty-container/EmptyContainer';
import ReceiptSettingsFab from 'src/components/receipt-settings-fab/ReceiptSettingsFab';

/* Stylesheet */
import styles from './PreviewContainer.module.scss';

/* Interface(s) */
interface PreviewContainerProps {
    receipt: string;
}

const PreviewContainer: React.FC<PreviewContainerProps> = ({ receipt }) => {
    return (
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
                <EmptyContainer
                    icon={'/assets/icon/image.svg'}
                    title={'No preview to show yet'}
                />
            )}
        </div>
    );
};

export default PreviewContainer;