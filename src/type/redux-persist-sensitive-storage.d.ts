declare module 'redux-persist-sensitive-storage' {
  import { Storage } from 'redux-persist';

  interface SensitiveStorageConfig {
    keychainService?: string; 
    sharedPreferencesName?: string; 
  }

  const createSensitiveStorage: (config?: SensitiveStorageConfig) => Storage;

  export default createSensitiveStorage;
}
