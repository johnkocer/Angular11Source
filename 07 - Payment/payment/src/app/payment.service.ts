import { Injectable } from "@angular/core";
import { Member, Product, Payment } from "./app.classLibrary";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PaymentService {
  private membersUrl = "api/members"; // URL to web api
  private productsUrl = "api/products"; // URL to web api

  constructor(private http: HttpClient) { }

  getProductList(filter: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  // /** GET member by id. Will 404 if id not found */
  getMember(id: number): Observable<Member> {
    const url = `${this.membersUrl}/${id}`;
     return this.http.get<Member>(url);
  }

  makePayment(payment: any): Observable<Payment> {
    console.log("in makePayment, payment:" + payment);
    if (!payment.expirationDate) {
      payment.isSuccess = false;
      payment.errorMessage = "expiration date is not valid!";
      return of(payment);
    }
    payment.errorMessage = "200 OK";
    payment.paymentMessage =
      "Your payment of $" + payment.paymentAmount + " has been processed!";
    return of(payment);
  }
}
