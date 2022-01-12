/* React */
import React from 'react';

/* Ionic */
import {
    IonIcon
} from '@ionic/react';

/* Model(s) */
import DotModel from 'src/shared/mocks/dots';

/* Mock(s) */
import {
    DOTS
} from 'src/shared/mocks/dots';

/* Stylesheet */
import styles from './EmptyContainer.module.scss';

/* Interface(s) */
interface EmptyContainerProps {
    icon: string;
    title: string;
}

const CardHeader: React.FC<EmptyContainerProps> = ({ icon, title }) => {
    const dots: DotModel[] = DOTS;

    const renderDots = dots.map((dot: DotModel) => {
        return (
            <IonIcon 
                key={dot.id}
                className={`${styles[dot.commonClass]} ${styles[dot.individualClass]}`} 
                icon={dot.icon} 
            />
        );
    });

    return (
        <div className={styles.empty_container}>
            <div className={styles.wrapper_container}>
                <IonIcon className={styles.icon} icon={icon} />
                <div className={styles.flex_container}>
                    <div className={styles.label_container}>
                        {title}
                    </div>
                    <div className={styles.dot_container}>
                        {renderDots}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardHeader;