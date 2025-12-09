import { SECRET_KEY } from '@env';
import CryptoJS from 'crypto-js';

const SECRET = SECRET_KEY; 

export function signRequest(path: string, body: any = {}) {
  const timestamp = Date.now().toString();
  const nonce = Math.random().toString(36).substring(2, 15);

  const rawString = path + JSON.stringify(body) + timestamp + nonce + SECRET;

  const signature = CryptoJS.SHA256(rawString).toString();

  return { timestamp, nonce, signature };
}
