/* navCard.ts */

/* Util(s) */
import generateRandomID from 'src/utils/helper/generateRandomID';

/* Model(s) */
export default interface NavCardModel {
    id: string;
    title: string;
    icon?: string;
    color: string;
}

export const NAV_CARDS: NavCardModel[] = [
    {
        id: generateRandomID(),
        title: 'Receipt Processor',
        color: '#77CCDA'
    },
    {
        id: generateRandomID(),
        title: 'Meta Extractor',
        color: '#F27575'
    }, 
    {
        id: generateRandomID(),
        title: 'Recipe Suggestor',
        color: '#dab777'
    }
]