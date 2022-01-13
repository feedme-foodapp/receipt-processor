/* React */
import React, { useState, useEffect } from 'react';

/* Component(s) */
import EmptyContainer from 'src/components/empty-container/EmptyContainer';

/* Stylesheet */
import styles from './PreviewContainer.module.scss';

/* Interface(s) */
interface PreviewContainerProps {
    receipt: string;
}

const PreviewContainer: React.FC<PreviewContainerProps> = ({ receipt }) => {

    // const [preview, setPreview] = useState<string>('');

    // useEffect(() => {
    //     if(receipt) {
    //         setPreview(receipt)
    //     }
    // }, [receipt]);

    return (
        <div className={styles.preview_container}>
            {receipt ? (
                <img 
                    className={styles.receipt} 
                    src={receipt} 
                    alt="receipt" 
                />
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