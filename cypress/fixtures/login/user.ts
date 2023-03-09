import {user} from './constants';

export interface User {
  email: string;
  password: string;
}

export const candidate: User = {
  email: `${user}@cymulate.com`,
  password: 'Aa123456'
};