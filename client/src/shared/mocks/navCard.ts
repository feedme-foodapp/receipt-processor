/* navCard.ts */

/* Util(s) */
import generateRandomID from 'src/utils/helper/generateRandomID';

/* Model(s) */
export default interface NavCardModel {
    id: string;
    title: string;
    icon?: string;
    color: string;
    url: string;
}

export const NAV_CARDS: NavCardModel[] = [
    {
        id: generateRandomID(),
        title: 'Receipt Processor',
        color: '#77CCDA',
        url: '/receipt-recognition'
    },
    {
        id: generateRandomID(),
        title: 'Meta Extractor',
        color: '#F27575',
        url: ''
    }, 
    {
        id: generateRandomID(),
        title: 'Recipe Suggestor',
        color: '#dab777',
        url: ''
    }
]