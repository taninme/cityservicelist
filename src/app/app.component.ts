import { Component, OnInit } from '@angular/core';
import {DataServiceService} from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public showSearchResult = false;
  public searchInsTable: any[] = [];
  public searchInsInputs: any = { firstName: '', lastName: ''};

  OnInit() {}

  constructor(public dataBackend: DataServiceService) {}

  clickSearchList() {
    const parameters = '?' + 'first_name=' + this.searchInsInputs.firstName + '&' + 'last_name=' + this.searchInsInputs.lastName;
    console.log(parameters);
  // get search for CityList
    this.dataBackend.getCityList(parameters).subscribe( data => {
          console.log(data);
          console.log(data.length);
          if (data.length > 0) {
          this.searchInsTable = data;
          this.showSearchResult = true;
        } else {
          this.showSearchResult = false;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
