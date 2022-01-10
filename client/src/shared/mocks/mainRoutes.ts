/* mainRoutes.ts */

/* Ionic */
import {
    homeOutline
} from 'ionicons/icons';

/* Util(s) */
import generateRandomID from 'src/utils/helper/generateRandomID';

/* Model(s) */
export default interface MainRouteModel {
    id: string;
    name: string;
    icon: string;
    route: string;
}

export const MAIN_ROUTES: MainRouteModel[] = [
    {
        id: generateRandomID(),
        name: 'Home',
        icon: homeOutline,
        route: '/home'
    },
    {
        id: generateRandomID(),
        name: 'Receipt recognition',
        icon: '/assets/icon/recognition.svg',
        route: '/recognition/ocr'
    },
    {
        id: generateRandomID(),
        name: 'About',
        icon: '/assets/icon/info.svg',
        route: '/about'
    }
];