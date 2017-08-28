import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


/*
  Generated class for the CommodityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CommodityProvider {

  getApiUrl : string ="http://localhost:8000/api/commodity";

  getCommodity(){

    return this.http.get(this.getApiUrl)
           .do(( res : Response) => console.log(res.json())
           .map((res: Response)=> res.json())
           .catch(error=> console.log(error));

  }
  constructor(public http: Http) {
    console.log('Hello CommodityProvider Provider');
  }

}
