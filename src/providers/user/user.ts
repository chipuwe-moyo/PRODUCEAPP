import { Injectable } from '@angular/core';
import { Http ,Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthService} from "../../app/auth.service";
import {Observable} from "rxjs/Observable";
import{notification} from'../../models/notification';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProvider {


  notification: notification;
  constructor(public http: Http,public authService:AuthService,) {
    console.log('Hello UserProvider Provider');
  }
  notifyUser(id: number, message: string, recipient: number) {
    const token = this.authService.getToken();
    const body = JSON.stringify({message: message, recipient: recipient});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8000/api/commodity/notify/' + id + '?token=' + token, body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }



  getNotifications() : Observable <Notification[]> {
    const token = this.authService.getToken();
    return this.http.get('http://localhost:8000/api/commodity/notifications?token=' + token)
      .map(
        (response: Response) => response.json().notifications
      )
  }
}
