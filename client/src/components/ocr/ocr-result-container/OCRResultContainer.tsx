/* React */
import React, { useEffect, useState } from 'react';

/* React-Redux */
import {
    useSelector
} from 'react-redux';

/* Model(s) */
import {
    RootState
} from 'src/redux/store';

import {
    OCRResultModel
} from 'src/shared/models/ocrResultModel';

/* Component(s) */
import Illustrator from 'src/components/illustrator/Illustrator';
import OCRProcessing from 'src/components/ocr/ocr-processing/OCRProcessing'
import OCRResults from 'src/components/ocr/ocr-results/OCRResults';
import ResultsModal from 'src/components/modals/results-modal/ResultsModal';

/* Stylesheet */
import styles from './OCRResultContainer.module.scss';

/* Interface(s) */
interface OCRResultContainerProps {
    receipt: string;
}

// const CircularJSON = require('circular-json');

const OCRResultContainer: React.FC<OCRResultContainerProps> = ({ receipt }) => {
    const resultsState = useSelector((state: RootState) => state.ocrResults);

    // isProcessing
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const handleIsProcessing = (value: boolean) => {
        setIsProcessing(value);
    };

    // results
    const defaultResults: OCRResultModel = {
        metaInfo: {
            lines: 0,
            words: 0,
            confidence: 0
        },
        results: []
    }

    const [results, setResults] = useState<OCRResultModel>(defaultResults);

    // showResultsModal
    const [showResultsModal, setShowResultsModal] = useState<boolean>(false);

    const handleShowResultsModal = (value: boolean) => {
        setShowResultsModal(value);
    }

    useEffect(() => {
        setResults(
            {
                metaInfo: resultsState.ocrResults.metaInfo, 
                results: resultsState.ocrResults.results
            }
        );
    }, [resultsState.ocrResults]);
    
    return (
        <React.Fragment>
            <ResultsModal
                showResultsModal={showResultsModal}
                handleShowResultsModal={handleShowResultsModal}
            />
            <div
                style={{ height: results.results.length === 0 ? '100%' : '' }}
                className={styles.results_container}>
                <div
                    style={{
                        display: results.results.length === 0 ? 'flex' : 'block',
                        width: results.results.length === 0 ? '90%' : '100%',
                    }}
                    className={styles.flex_container}>
                    <div className={styles.btn_container}>
                        {!isProcessing ? (
                            <React.Fragment>
                                {results.results.length === 0 ? (
                                    <OCRProcessing 
                                        receipt={receipt} 
                                        handleIsProcessing={handleIsProcessing}
                                    />
                                ) : (
                                    <OCRResults results={results} />
                                )}
                            </React.Fragment>
                        ) : (
                            <Illustrator
                                icon={'/assets/icon/glass.svg'}
                                title={'Is processing'}
                                animation={true}
                            />
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default OCRResultContainer;