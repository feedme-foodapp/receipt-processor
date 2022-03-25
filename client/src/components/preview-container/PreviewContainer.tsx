/* React */
import React, { useState } from 'react';

/* Component(s) */
import Illustrator from 'src/components/shared/illustrator/Illustrator';
import ReceiptOptionFab from 'src/components/receipt-option-fab/ReceiptOptionFab';
import LandscapeFiller from 'src/components/landscape-filler/LandscapeFiller';
import ModalContainer from 'src/components/modals/ModalContainer';

/* Stylesheet */
import styles from './PreviewContainer.module.scss';

/* Interface(s) */
interface PreviewContainerProps {
    receipt: string;
    showReceiptOptionFab: boolean;
}

const PreviewContainer: React.FC<PreviewContainerProps> = ({ receipt, showReceiptOptionFab }) => {

    // showModal
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleModal = (value: boolean) => {
        setShowModal(value);
    };

    return (
        <React.Fragment>
            <ModalContainer
                showModal={showModal}
                handleModal={handleModal}>
                <div>PreviewContainer Modal</div>
            </ModalContainer>
            <div className={styles.preview_container}>
                {receipt ? (
                    <React.Fragment>
                        <img
                            className={styles.receipt}
                            src={receipt}
                            alt="receipt"
                        />
                        {showReceiptOptionFab && (
                            <ReceiptOptionFab
                                handleModal={handleModal}
                            />
                        )}
                    </React.Fragment>
                ) : (
                    <Illustrator
                        icon={'/assets/icon/image2.svg'}
                        title={'No preview to show yet'}
                        showDots={true}
                        animation={false}
                    />
                )}
            </div>
            <LandscapeFiller />
        </React.Fragment>
    );
};

export default PreviewContainer;