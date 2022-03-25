/* React */
import React, { useEffect } from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    hide
} from 'src/redux/features/splitPaneSlice';

/* Ionic */
import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow
} from '@ionic/react';

/* Model(s) */
import NavCardModel from 'src/shared/models/navCardModel';

/* Mock(s) */
import { NAV_CARDS } from 'src/shared/mocks/navCard';

/* Component(s) */
import HeroContainer from 'src/components/hero-container/HeroContainer';
import NavCard from 'src/components/nav-card/NavCard';

/* Stylesheet */
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const navCards: NavCardModel[] = NAV_CARDS;

    useEffect(() => {
        dispatch(hide());
    }, [dispatch]);

    return (
        <IonPage>
            <IonContent className={styles.content_container}>
                <HeroContainer />
                <IonGrid className={styles.grid_container}>
                    <IonRow className={styles.row}>
                        <NavCard navCards={navCards} />
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default HomePage;