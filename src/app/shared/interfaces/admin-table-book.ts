export interface AdminTableBook {
  id: number;
  ISBN: string;
  Book_Title: string;
  Author: string;
  Publication_Year: string;
  Language: string;
  No_Of_Copies_Actual: number;
  No_Of_Copies_Current: number;
  Available: number;
  Price: number;
  Category_Type: string;
  File_Path: string;
  Status: number;
}
