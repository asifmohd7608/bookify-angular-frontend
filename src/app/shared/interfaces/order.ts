export interface Order {
  id: number;
  User_Id: number;
  Book_Id: number;
  Book_Title: string;
  Coupon_Id: number;
  Coupon_Name: string;
  Quantity: number;
  Unit_Price: number;
  Total_Price: number;
  Discount: number;
  Amount_Paid: number;
  created_at: number;
  updated_at: number;
}
