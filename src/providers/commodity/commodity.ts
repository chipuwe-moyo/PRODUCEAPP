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

    return this.http.get("https://fptp-unza.herokuapp.com/api/commodity/all")
      .map((res: Response) => {return res.json().commodities});


  }

  getMyCommodities(): Observable<commodity[]> {
    const token = this.authService.getToken();
    return this.http.get('https://fptp-unza.herokuapp.com/api/commodity/mine?token=' + token)
      .map(
        (response: Response) => {
          return response.json().commodities;
        }
      );
  }


  getApiUrl : "https://fptp-unza.herokuapp.com/api/commodity/info";
//

  addCommodity(product: string,
               description:string,
              price: number,
              quantity: number,
              metric: string,
              town: string,
              province: string,
              country: string,
              photo:any)
    {
      const token = this.authService.getToken();
      const body = 'product=' + product +
        '&description=' + description +
        '&price=' + price +
        '&quantity='+ quantity+
        '&metric=' + metric+
        '&town=' + town+
        '&province=' + province+
        '&country=' + country;
      const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
      return this.http.post('https://fptp-unza.herokuapp.com/api/commodity/store?token=' + token, body, {headers: headers});
    }


  getCommodityInfo(id: number): Observable<commodity> {
    return this.http.get('https://fptp-unza.herokuapp.com/api/commodity/info/'+id)
      .map((res: Response) => {return res.json().commodity;})
  }




  deleteCommodity(id: number) {
    const token = this.authService.getToken();
    return this.http.delete('https://fptp-unza.herokuapp.com/api/commodity/' + id + '?token=' + token);
  }



  constructor(public http: Http,public authService:AuthService) {
    console.log('Hello CommodityProvider Provider');
  }
  public query: string;




  search(query: string): Observable<commodity[]> {

    return this.http.get('https://fptp-unza.herokuapp.com/api/search?q=' + query)
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
    return this.http.put('https://fptp-unza.herokuapp.com/api/commodity/' + id + '?token=' + token, body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }
}
