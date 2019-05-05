import { UserModel } from './user';

export class ContextViewModel {
  public authenticatedUser: UserModel = null;
  public setUser: (user: UserModel) => void;
  public themeType: 'light' | 'dark' = 'light';
  public setTheme: (newTheme: any) => void;
  public globalMessage: {
    type: 'success' | 'error' | 'info' | 'warning';
    message: string;
  } = null;
  public setGlobalMessage: (message: any) => void;
}
