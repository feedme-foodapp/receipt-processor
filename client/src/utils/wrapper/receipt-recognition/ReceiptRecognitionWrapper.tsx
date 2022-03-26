/* React */
import React, { useRef, useEffect } from 'react';

/* Ionic */
import {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard
} from '@ionic/react';

/* Framer-Motion */
import { 
    motion 
} from 'framer-motion/dist/framer-motion';

/* Util(s) */
import { styleScrollbars } from 'src/utils/helper/scrollbar';

/* Model(s) */
import {
    VariantModel,
    TransitionModel,
} from 'src/shared/animations/pageTransition';

/* Mock(s) */
import {
    VARIANT,
    TRANSITION
} from 'src/shared/animations/pageTransition';

/* Component(s) */
import Toolbar from 'src/components/toolbar/Toolbar';
import FileUploader from 'src/components/file-uploader/FileUploader';

/* Stylesheet */
import styles from './ReceiptRecognitionWrapper.module.scss';

/* Interface(s) */
interface RecognitionWrapperProps {
    children: React.ReactNode[];
}

const ReceiptRecognitionWrapper: React.FC<RecognitionWrapperProps> = ({ children }) => {
    const ionContentRef: any = useRef();
    const variant: VariantModel = VARIANT;
    const transition: TransitionModel = TRANSITION;

    useEffect(() => {
        styleScrollbars(ionContentRef.current);
    }, []);

    return (
        <React.Fragment>
            <Toolbar />
            <IonContent 
                ref={ionContentRef}
                className={styles.content_container}>
                <motion.div
                    style={{
                        height: '100%'
                    }}
                    initial={variant.initial}
                    animate={variant.in}
                    exit={variant.out}
                    transition={transition}>
                    <IonGrid className={styles.grid_container}>
                        <IonRow className={styles.row}>
                            <IonCol
                                className={`${styles.col}`}
                                sizeXs="12"
                                sizeXl="6">
                                <IonCard className={`${styles.card}`}>
                                    {children[0]}
                                </IonCard>
                            </IonCol>
                            <IonCol
                                className={`${styles.col}`}
                                sizeXs="12"
                                sizeXl="6">
                                <IonCard className={`${styles.card}`}>
                                    <IonContent ref={ionContentRef}>
                                        {children[1]}
                                    </IonContent>
                                    <FileUploader />
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </motion.div>
            </IonContent>
        </React.Fragment>
    );
};

export default ReceiptRecognitionWrapper;