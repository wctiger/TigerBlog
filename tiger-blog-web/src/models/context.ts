import { UserModel } from './user';

export class ContextViewModel {
  public authenticatedUser: UserModel = null;
  public themeType: 'light' | 'dark' = 'light';
  public setUser: (user: UserModel) => void;
  public setTheme: (newTheme: any) => void;
}
