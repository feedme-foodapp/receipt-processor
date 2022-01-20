/* React */
import React, { useEffect } from 'react';

/* Ionic */
import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard
} from '@ionic/react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    hide
} from 'src/redux/features/splitPaneSlice';

/* Model(s) */
import NavCardModel from 'src/shared/mocks/navCard';

/* Mock(s) */
import { NAV_CARDS } from 'src/shared/mocks/navCard';

/* Component(s) */
import HeroContainer from 'src/components/hero-container/HeroContainer';

/* Stylesheet */
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const navCards: NavCardModel[] = NAV_CARDS;

    useEffect(() => {
        dispatch(hide());
    }, [dispatch]);

    const renderNavCards = navCards.map((navCard: NavCardModel) => {
        return (
            <IonCol
                key={navCard.id}
                className={styles.col}
                sizeXs="12"
                sizeXl="4">
                <IonCard
                    className={styles.card}
                    button>
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
        <IonPage>
            <IonContent className={styles.content_container}>
                <HeroContainer />
                <IonGrid className={styles.grid_container}>
                    <IonRow className={styles.row}>
                        {renderNavCards}
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default HomePage;