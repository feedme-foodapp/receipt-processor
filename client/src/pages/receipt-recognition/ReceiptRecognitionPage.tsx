/* React */
import React, { useEffect } from 'react';

/* React-Router */
import {
    useRouteMatch,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    show 
} from 'src/redux/features/splitPaneSlice';

/* Ionic */
import {
    IonPage,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon
} from '@ionic/react';

import {
    IonReactRouter
} from '@ionic/react-router';

/* Component(s) */
import OCRTab from 'src/tabs/ocr/OCRTab';

/* Stylesheet */
import styles from './ReceiptRecognitionPage.module.scss';

const ReceiptRecognitionPage: React.FC = () => {
    const { path } = useRouteMatch();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(show());
    }, [dispatch]);

    return (
        <IonPage>
            <IonReactRouter>
                {/* Tab-Layout */}
                <IonTabs className={styles.tab_container}>
                    <IonRouterOutlet>
                        <Switch>
                            <Route exact path={`${path}/ocr`}>
                                <OCRTab />
                            </Route>
                            <Route path={`${path}`}>
                                <Redirect push to={`${path}/ocr`} />
                            </Route>
                        </Switch>
                    </IonRouterOutlet>
                    <IonTabBar
                        className={styles.tab_bar}
                        slot="bottom">
                        <IonTabButton
                            className={`${styles.tab_btn}`}
                            tab="ocr"
                            href={`${path}/ocr`}>
                            <IonIcon className={styles.icon} icon={'/assets/icon/ocr.svg'} />
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonPage>
    );
};

export default ReceiptRecognitionPage;