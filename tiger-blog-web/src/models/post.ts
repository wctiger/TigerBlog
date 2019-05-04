export interface PostModel {
  PostId: number;
  Title: string;
  Summary?: string;
  Content?: string;
  Owner: string;
  IsArchived: boolean;
  CreatedTime: Date;
  UpdatedTime: Date;
}
