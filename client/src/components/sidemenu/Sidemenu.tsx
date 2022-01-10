/* React */
import React, { useState, useEffect } from 'react';

/* React-Router */
import {
    useLocation
} from 'react-router-dom';

/* Ionic */
import {
    IonMenu,
    IonContent,
    IonButton,
    IonIcon,
    IonLabel,
    IonList
} from '@ionic/react';

/* Model(s) */
import MainRouteModel from 'src/shared/mocks/mainRoutes';

/* Mock(s) */
import { MAIN_ROUTES } from 'src/shared/mocks/mainRoutes';

/* Stylesheet */
import styles from './Sidemenu.module.scss';

const Sidemenu: React.FC = () => {
    const routes: MainRouteModel[] = MAIN_ROUTES;
    const location = useLocation();

    // activeRoute
    const [activeRoute, setActiveRoute] = useState<string>(routes[1].route);

    const handleActiveRoute = () => {
        routes.map((route: MainRouteModel) => {
            if (route.route.substring(1, route.route.length).split('/')[0] === location.pathname.substring(1, location.pathname.length).split('/')[0]) {
                return setActiveRoute(route.route);
            } else {
                return undefined;
            }
        });
    };  

    useEffect(() => {
        handleActiveRoute();
    });

    const renderRoutes = routes.map((route: MainRouteModel) => {
        return (
            <IonButton
                key={route.id}
                style={{
                    '--background': `${(route.route === activeRoute) ? 'rgba(119,204,218,0.5)' : ''}`
                }}
                className={styles.btn}
                expand="block"
                routerLink={route.route}>
                <IonIcon
                    className={route.route !== activeRoute ? styles.icon : styles.icon_active}
                    icon={route.icon}
                    slot="start"
                />
                <IonLabel>
                    {route.name}
                </IonLabel>
            </IonButton>
        )
    });

    return (
        <IonMenu
            className={styles.sidemenu_container}
            menuId="main-menu"
            contentId="main-content">
            <IonContent
                id="main-content"
                className={styles.content_container}>
                <IonList className={styles.list_container}>
                    {renderRoutes}
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Sidemenu;