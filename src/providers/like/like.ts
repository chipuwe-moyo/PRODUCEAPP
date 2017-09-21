import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthService} from "../../app/auth.service";
import {Observable} from "rxjs/Observable";
import {Like} from '../../models/like';
/*
  Generated class for the LikeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LikeProvider {

  constructor(public http: Http, public authService: AuthService) {
    console.log('Hello LikeProvider Provider');
  }
  getLikes(): Observable<Like[]> {
    const token = this.authService.getToken();
    return this.http.get('http://localhost:8000/api/commodity/like/mine?token=' + token)
      .map(
        (response: Response) => {
          return response.json().likes;
        }
      );
  }
}
