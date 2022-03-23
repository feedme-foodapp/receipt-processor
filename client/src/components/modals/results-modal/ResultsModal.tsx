/* React */
import React from 'react';

/* Ionic */
import {
    IonModal
} from '@ionic/react';

/* Stylesheet */
import styles from './ResultsModal.module.scss';

/* Interface(s) */
interface ResultsModalProps {
    showResultsModal: boolean;
    handleShowResultsModal: Function;
}

const ResultsModal: React.FC<ResultsModalProps> = ({ showResultsModal, handleShowResultsModal }) => {
    return (
        <IonModal
            cssClass={styles.results_modal_container}
            isOpen={showResultsModal}>
        </IonModal>
    );
};

export default ResultsModal;