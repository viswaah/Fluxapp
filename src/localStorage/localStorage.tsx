import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocalStorage {
    static async setData(key: string, value: string | number): Promise<void> {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    }

    static async getData(key: string): Promise<string | number> {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value);
        }
        return null;
    }
}
