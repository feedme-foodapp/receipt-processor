/* React */
import React from 'react';

/* Ionic */
import {
    IonModal
} from '@ionic/react';

/* Component(s) */
import ModalCloseFab from 'src/components/modals/modal-close-fab/ModalCloseFab';

/* Stylesheet */
import styles from './ModalContainer.module.scss';

/* Interface(s) */
interface ModalContainerProps {
    showModal: boolean;
    handleModal: Function;
    children: React.ReactNode;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ showModal, handleModal, children }) => {
    return (
        <IonModal
            isOpen={showModal}
            cssClass={styles.modal_container}
            onDidDismiss={
                () => {
                    handleModal(false);
                }
            }>
            <div>
                <ModalCloseFab handleModal={handleModal} />
                {children}
            </div>
        </IonModal>
    );
};

export default ModalContainer;