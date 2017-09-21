
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/Rx'

import {Injectable} from "@angular/core";
import {tokenNotExpired} from "angular2-jwt"
import {HomePage} from "../pages/home/home";
import {user} from '../models/user';

@Injectable()
export class AuthService {

  constructor(private http: Http){}

  public token : string;

  login(username: string, password: string) {

    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let body = 'username=' + username + '&password=' + password ;
    return this.http.post('https://fptp-unza.herokuapp.com/api/auth/login',
      body, {headers: headers})
      .map(
        (response: Response) => {
          const token = response.json().token;
          const base64Url = token.split('.')[1];
          const base64 = base64Url.replace('_', '+').replace('_', '/');
          return {token: token, decoded: JSON.parse(window.atob(base64))};
        }
      ).do(
        tokenData => {

          localStorage.setItem('token', tokenData.token);
        })
      .finally(() => {
      });
  }
  getToken() {
    return localStorage.getItem('token');
  }
  loggedIn() {
    return tokenNotExpired();
  }



  register(first_name: string,
           last_name: string,
           username: string,
           password: string,
           street_address: string,
           city: string,
           province: string,
           country: string,
           email: string,
           phone_number: string) {
    let body = 'first_name='+ first_name +
      '&last_name=' + last_name +
      '&username='+ username +
      '&password='+password +
      '&street_address='+street_address +
      '&city='+city+
      '&province='+province+
      '&country='+country+
      '&email='+email+
      '&phone_number='+phone_number;

    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http.post('https://fptp-unza.herokuapp.com//api/auth/register',
      body, {headers: headers});
  }
}
