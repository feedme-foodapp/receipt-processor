/* DBConfig.ts */

export const DBConfig = {
    name: 'feedMeDB',
    version: 1,
    objectStoresMeta: [
        {
            store: 'results',
            storeConfig: {
                keyPath: 'id', autoIncrement: true
            },
            storeSchema: [
                {
                    name: 'results', keypath: 'results', options: {unique: false}
                },
            ]        
        }
    ]
};