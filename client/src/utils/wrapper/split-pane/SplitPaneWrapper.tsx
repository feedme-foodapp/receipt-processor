/* React */
import React from 'react';

/* React-Redux */
import {
    useSelector
} from 'react-redux';

/* Ionic */
import {
    IonSplitPane
} from '@ionic/react';

/* Model(s) */
import {
    SplitPaneState
} from 'src/redux/store';

/* Interface(s) */
interface SplitPaneWrapperProps {
    children: React.ReactNode;
}

const SplitPaneWrapper: React.FC<SplitPaneWrapperProps> = ({ children }) => {
    const splitPaneState: SplitPaneState = useSelector((state: SplitPaneState) => state.splitPane);

    return (
        <React.Fragment>
            {splitPaneState.value ? (
                <IonSplitPane contentId="main-menu">
                    {children}
                </IonSplitPane>
            ) : (
                <React.Fragment>
                    {children}
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default SplitPaneWrapper;