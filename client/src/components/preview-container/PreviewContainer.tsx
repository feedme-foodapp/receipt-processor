/* React */
import React from 'react';

/* Component(s) */
import EmptyContainer from 'src/components/empty-container/EmptyContainer';

/* Stylesheet */
import styles from './PreviewContainer.module.scss';

/* Interface(s) */
interface PreviewContainerProps {
    image: string;
}

const PreviewContainer: React.FC<PreviewContainerProps> = ({ image }) => {
    return (
        <div className={styles.preview_container}>
            {image ? (
                <span></span>
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