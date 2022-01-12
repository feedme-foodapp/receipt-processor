/* dots.ts */

/* Util(s) */
import generateRandomID from 'src/utils/helper/generateRandomID';

/* Model(s) */
export default interface DotModel {
    id: string;
    icon: string;
    commonClass: string;
    individualClass: string;
}

export const DOTS: DotModel[] = [
    {
        id: generateRandomID(),
        icon: '/assets/icon/dot.svg',
        commonClass: 'dot',
        individualClass: 'dot1'
    },
    {
        id: generateRandomID(),
        icon: '/assets/icon/dot.svg',
        commonClass: 'dot',
        individualClass: 'dot2'
    },
    {
        id: generateRandomID(),
        icon: '/assets/icon/dot.svg',
        commonClass: 'dot',
        individualClass: 'dot3'
    }
];