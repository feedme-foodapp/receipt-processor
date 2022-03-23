/* React */
import React from 'react';

/* React-Router */
import {
    Switch,
    Route,
    Redirect
} from 'react-router';

/* Ionic */
import {
    IonRouterOutlet
} from '@ionic/react';

/* Util(s) */
import SplitPaneWrapper from 'src/utils/wrapper/split-pane/SplitPaneWrapper';

/* Page(s) */
import HomePage from 'src/pages/home/HomePage';
import ReceiptRecognitionPage from 'src/pages/receipt-recognition/ReceiptRecognitionPage';

/* Component(s) */
import Sidemenu from 'src/components/sidemenu/Sidemenu';

const AppRouter: React.FC = () => {
    return (
        <SplitPaneWrapper>
            <React.Fragment>
                <Sidemenu />
                <IonRouterOutlet id="main-menu">
                    <Switch>
                        <Route path="/home">
                            <HomePage />
                        </Route>
                        <Route path="/receipt-recognition">
                            <ReceiptRecognitionPage />
                        </Route>
                        <Route path="/">
                            <Redirect push to="/home" />
                        </Route>
                    </Switch>
                </IonRouterOutlet>
            </React.Fragment>
        </SplitPaneWrapper>
    );
};

export default AppRouter;