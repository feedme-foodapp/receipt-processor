/* React */
import React from 'react';

import {
    useHistory
} from 'react-router-dom';

/* Ionic */
import {
    IonCol,
    IonIcon,
    IonRippleEffect
} from '@ionic/react';

/* Model(s) */
import NavCardModel from 'src/shared/models/navCardModel';

/* Stylesheet */
import styles from './NavCard.module.scss';

/* Interface(s) */
interface NavCardProps {
    navCards: NavCardModel[];
}

const NavCard: React.FC<NavCardProps> = ({ navCards }) => {
    const history = useHistory();

    const renderNavCards = navCards.map((navCard: NavCardModel) => {
        return (
            <IonCol
                key={navCard.id}
                className={styles.col}
                sizeXs="12"
                sizeXl="4">
                <div
                    className={`${styles.card} ion-activatable ripple-parent`}
                    onClick={
                        () => {
                            history.push(navCard.url);
                        }
                    }>
                    <div
                        style={{
                            background: navCard.color
                        }}
                        className={styles.title_container}>
                        <div className={styles.title}>
                            {navCard.title}
                        </div>
                    </div>
                    <div className={styles.content_container}>
                        <div className={styles.block_container}>
                            <IonIcon 
                                className={styles.icon}
                                icon={navCard.icon} 
                            />
                        </div>
                    </div>
                    <IonRippleEffect />
                </div>
            </IonCol>
        );
    });

    return (
        <React.Fragment>
            {renderNavCards}
        </React.Fragment>
    );
};

export default NavCard;