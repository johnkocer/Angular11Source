import { Component, OnInit } from "@angular/core";
import { PaymentService } from "../payment.service";
import { Member } from "../app.classLibrary";
@Component({
  selector: "app-member",
  templateUrl: "./member.component.html",
  styleUrls: ["./member.component.css"]
})
export class MemberComponent implements OnInit {
  errorMessage: string;
  public member: Member;
  paymenRes: any;
  constructor(private paymentService: PaymentService) {
    this.member = new Member();
  }

  ngOnInit() {
    this.getMember(1);
  }
  getMember(id: number) {
    if (!id) {
      return;
    }
    this.paymentService.getMember(id).subscribe(
      data => {
        console.dir(data);
        if (data != undefined) {
          this.member = data;
        }
      },
      error => {
        console.log("could not get Member", error);
      }
    );
  }
}
