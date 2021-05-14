import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  public filterData: BehaviorSubject<object> = new BehaviorSubject<object>({});
  constructor(private http: HttpClient) {}

  getList(path: any) {
    return this.http.get(
      "https://api.spacexdata.com/v3/launches?limit=100" + path
    );
  }

  setFilter(data) {
    this.filterData.next(data);
  }

  getFilter() {
    return this.filterData.asObservable();
  }
}
