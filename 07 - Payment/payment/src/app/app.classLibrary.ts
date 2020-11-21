export class Product {
  productId: string;
  price: number;
  name: string;
}

export interface IMember {
  id: string;
  fullName: string;
  zipCode: string;
  errorMessage: string;
  isSuccess: boolean;
}

export class Member implements IMember {
  public id: string;
  public fullName: string;
  public zipCode: string;
  errorMessage: string;
  isSuccess: boolean;
  constructor() {
    this.id = "100";
    this.fullName = "Jen Smart";
    this.zipCode = "84223";
    this.errorMessage = "OK";
    this.isSuccess = true;
  }
}

export interface ISingleResponse<TModel> {
  model: TModel;
  message: string;
  didError: boolean;
  errorMessage: string;
}

export class SingleResponse<TModel> implements ISingleResponse<TModel> {
  public model: TModel;
  public message: string;
  public didError: boolean;
  public errorMessage: string;
}

export class Payment {
  id: string;
  paymentAmount: number;
  paymentDate: Date;
  nameOnCard: string;
  creditCardNumber: string;
  cvv: string;
  paymentSource: string;
  expirationDate: string;
  isSuccess: boolean;
  errorMessage: string;
  paymentMessage: string;
  paymentConfirmationId: string;
  member: Member;
}
