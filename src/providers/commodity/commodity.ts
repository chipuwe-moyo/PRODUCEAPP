import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx'
import {Observable} from 'rxjs/Rx';
import {commodity } from '../../models/commodity';
/*
  Generated class for the CommodityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CommodityProvider {


  getCommodity():Observable<commodity[]> {

    return this.http.get("http://localhost:8000/api/commodity/all")
      .map((res: Response) => {return res.json().commodities});


  }
  constructor(public http: Http) {
    console.log('Hello CommodityProvider Provider');
  }

}
