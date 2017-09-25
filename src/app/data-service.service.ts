import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataServiceService {

  constructor(public http: Http) { }

  // get City Active List
  getCityList(input) {
    return this.http.get('https://data.cityofnewyork.us/resource/5scm-b38n.json' + input).map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'get list error'));
  }
}
