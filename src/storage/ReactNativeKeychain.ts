import { deleteItemAsync, setItemAsync } from 'expo-secure-store';
import {resetGenericPassword, setGenericPassword, getGenericPassword} from 'react-native-keychain';
import { key } from './CommandSource';


resetGenericPassword()
deleteItemAsync(key)


export async function getFromReactNativeKeychain(): Promise<string | undefined> {
    const result = await getGenericPassword()
    if (result) return result.password;
    return undefined;
}
