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
import styles from './Illustrator.module.scss';

/* Interface(s) */
interface IllustratorProps {
    icon: string;
    title: string;
    animation: boolean;
}

const Illustrator: React.FC<IllustratorProps> = ({ 
    icon, 
    title, 
    animation 
}) => {
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
        <div className={styles.placeholder_container}>
            <div className={styles.wrapper_container}>
                <IonIcon 
                    className={animation ? `${styles.icon} ${styles.icon_shaking}` : `${styles.icon} ${styles.icon_not_shaking}`} 
                    icon={icon} 
                />
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

export default Illustrator;