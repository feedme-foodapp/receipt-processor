/* React */
import React from 'react';

import {
    useHistory
} from 'react-router-dom';

/* Ionic */
import {
    IonCard,
    IonCol
} from '@ionic/react';

/* Model(s) */
import NavCardModel from 'src/shared/mocks/navCard';

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
                <IonCard
                    className={styles.card}
                    button
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
                        <span className={styles.title}>
                            {navCard.title}
                        </span>
                    </div>
                </IonCard>
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