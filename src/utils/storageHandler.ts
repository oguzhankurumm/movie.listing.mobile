import AsyncStorage from '@react-native-async-storage/async-storage';

const getStorageItem = async (key: StorageKeys) => {
  return (await AsyncStorage?.getItem(key)) ?? '';
};
const setStorageItem = async (key: StorageKeys, value: string = '') => {
  return AsyncStorage?.setItem(key, value);
};
const removeStorageItem = async (key: StorageKeys) => {
  return AsyncStorage?.removeItem(key);
};

const clearStorage = async () => {
  await AsyncStorage?.clear();
};

enum StorageKeys {
  Language = 'Language',
  DeviceId = 'DeviceId',
}

const storageServices = {
  setDeviceId: async (deviceId: string) => {
    try {
      await AsyncStorage.setItem(StorageKeys.DeviceId, deviceId);
    } catch (error: any) {
      throw new Error(error);
    }
  },
  getDeviceId: async () => {
    try {
      const deviceId = await AsyncStorage.getItem(StorageKeys.DeviceId);
      return deviceId;
    } catch (e) {
      return null;
    }
  },
};

export {
  getStorageItem,
  setStorageItem,
  removeStorageItem,
  clearStorage,
  StorageKeys,
  storageServices,
};
