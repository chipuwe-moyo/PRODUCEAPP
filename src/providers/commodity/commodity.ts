import { Injectable } from '@angular/core';
import { Http, Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx'
import {Observable} from 'rxjs/Rx';
import {commodity } from '../../models/commodity';
import {AuthService} from "../../app/auth.service";

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

  getApiUrl : "http://localhost:8000/api/commodity/info";
//

  addCommodity(product: string,
               description:string,
              price: number,
              quantity: number,
              metric: string,
              town: string,
              province: string,
              country: string) {
    {
      const token = this.authService.getToken();
      const body = JSON.stringify({
        product: product,
        description:description,
        price: price,
        quantity: quantity,
        metric: metric,
        town: town,
        province: province,
        country: country
      });
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post('http://localhost:8000/api/commodity/store?token=' + token, body, {headers: headers});
    }
  }

  getCommodityInfo(id: number): Observable<commodity> {
    return this.http.get('http://localhost:8000/api/commodity/info/'+id)
      .map((res: Response) => {return res.json().commodity;})
  }

  deleteCommodity(id: number) {
    const token = this.authService.getToken();
    return this.http.delete('http://localhost:8000/api/commodity/' + id + '?token=' + token);
  }
  constructor(public http: Http,public authService:AuthService) {
    console.log('Hello CommodityProvider Provider');
  }
  public query: string;

  search(query: string): Observable<commodity[]> {

    return this.http.get('http://localhost:8000/api/search?q=' + query)
      .map(
        (response: Response) => {
          return response.json().commodities;
        }
      );
  }


  updateCommodity(id: number,
                  newProduct: number,
                  newDescription: string,
                  newPrice: number,
                  newQuantity: number,
                  newMetric: string) {
    const token = this.authService.getToken();
    const body = JSON.stringify({
      product: newProduct,
      description: newDescription,
      price: newPrice,
      quantity: newQuantity,
      metric: newMetric
    });
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('http://localhost:8000/api/commodity/' + id + '?token=' + token, body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }
}
