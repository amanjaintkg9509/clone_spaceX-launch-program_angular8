import { Component, OnInit } from "@angular/core";
import { SharedService } from "src/app/shared/shared.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  url: string = "";
  cardData: any = [];
  constructor(private _sharedService: SharedService) {}

  ngOnInit() {
    this._sharedService.getFilter().subscribe((res: any) => {
      this.url = "";
      for (let a in res) {
        this.url += "&" + a + "=" + res[a];
      }
      this.getData();
    });
  }

  getData() {
    this._sharedService.getList(this.url).subscribe((res: any) => {
      if (!res) {
        this.cardData = [];
        return false;
      }

      this.cardData = res;
    });
  }
}
