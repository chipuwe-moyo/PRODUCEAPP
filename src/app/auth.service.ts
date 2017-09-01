
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
    return this.http.post('http://localhost:8000/api/auth/login',
      {username: username, password: password})
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
}
