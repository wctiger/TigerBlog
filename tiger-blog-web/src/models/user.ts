export interface UserModel {
  UserId: number;
  UserName: string;
  Password: string;
  IsAdmin?: boolean;
  DisplayName?: string;
  Email?: string;
  CreatedTime?: Date;
  UpdatedTime?: Date;

  RememberMe?: boolean;

  Token?: string; //UI field
}
