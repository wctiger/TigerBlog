import { UserModel } from './user';
import { APP_CONSTANT } from '../constants';

export class ContextViewModel {
  public authenticatedUser: UserModel;
  public setUser: (user: UserModel) => void;
  public themeType: 'light' | 'dark' = 'light';
  public setTheme: (newTheme: any) => void;
  public globalMessage: {
    type: 'success' | 'error' | 'info' | 'warning';
    message: string;
  } = null;
  public setGlobalMessage: (message: any) => void;

  constructor() {
    const storedUserInfo = localStorage.getItem(
      APP_CONSTANT.AUTHENTICATED_USER
    );
    if (storedUserInfo) {
      try {
        this.authenticatedUser = JSON.parse(storedUserInfo) as UserModel;
        return;
      } catch (error) {
        console.warn('Corrupted data in stored auth infomation ');
      }
    }
    this.authenticatedUser = null;
  }
}
