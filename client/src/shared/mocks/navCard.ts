/* navCard.ts */

/* Util(s) */
import generateRandomID from 'src/utils/helper/generateRandomID';

/* Model(s) */
import NavCardModel from 'src/shared/models/navCardModel';

export const NAV_CARDS: NavCardModel[] = [
    {
        id: generateRandomID(),
        title: 'Receipt Processor',
        color: '#77CCDA',
        icon: '/assets/icon/receipt.svg',
        url: '/receipt-recognition'
    },
    {
        id: generateRandomID(),
        title: 'Meta Extractor',
        color: '#F27575',
        icon: '/assets/icon/data.svg',
        url: ''
    }, 
    {
        id: generateRandomID(),
        title: 'Recipe Suggestor',
        color: '#f2b475',
        icon: '/assets/icon/food.svg',
        url: ''
    }
]