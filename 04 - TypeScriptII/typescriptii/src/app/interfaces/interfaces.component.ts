import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-interfaces",
  templateUrl: "./interfaces.component.html",
  styleUrls: ["./interfaces.component.css"]
})
export class InterfacesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.interfaces();
  }

  interfaces() {
    interface IMember {
      id: number;
      name: string;
    }

    let member: IMember = { id: 1, name: "James" };
    console.log(member);

    class ClubMember implements IMember {
      id: number;
      name: string;
      memberFee: number;
    }

    class GoldMember extends ClubMember {
      goldMemberFee: number;
    }

    let goldMember= new GoldMember();
    goldMember.id=1;
    goldMember.goldMemberFee=20;
    console.log(`id: ${goldMember.id} Fee: ${goldMember.goldMemberFee} `);
    // id: 1 Fee: 20 
  }
}
