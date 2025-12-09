import { keychainService, sharedPreferencesName } from '@env';
import createSensitiveStorage from 'redux-persist-sensitive-storage';

export const sensitiveStorage = createSensitiveStorage({
  keychainService: keychainService,
  sharedPreferencesName: sharedPreferencesName, 
});
