import { Component, OnInit } from "@angular/core";
import { SharedService } from "src/app/shared/shared.service";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"],
})
export class FilterComponent implements OnInit {
  filterObj: any = {};
  years: any = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
  ];
  constructor(private _sharedService: SharedService) {}

  ngOnInit() {}

  filter(key, value) {
    this.filterObj[key] = value;
    this._sharedService.setFilter(this.filterObj);
  }
}
