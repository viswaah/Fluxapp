import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocalStorage {
    static async setData(key: string, value: any): Promise<void> {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    }

    static async getData(key: string): any {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value);
        }
        return null;
    }
}
