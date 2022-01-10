/* React */
import React from 'react';

/* Component(s) */
import EmptyContainer from 'src/components/empty-container/EmptyContainer';

/* Stylesheet */
import styles from './PreviewContainer.module.scss';

const PreviewContainer: React.FC = () => {
    return (
        <div className={styles.preview_container}>
            <EmptyContainer title={'Preview container'} />
        </div>
    );
};

export default PreviewContainer;