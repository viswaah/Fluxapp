import {appConfig} from '../appConfig';
import {LocalStorage} from './localStorage';

export const registerConfig = async () => {
    const storageKey = 'Flux_Config_Identifier';
    const config = await LocalStorage.getData(storageKey);

    if (config === null) {
        await LocalStorage.setData(storageKey, appConfig);
        return appConfig;
    }

    return config;
};
