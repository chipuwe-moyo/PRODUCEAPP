import { Injectable } from '@angular/core';
import { Http ,Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthService} from "../../app/auth.service";
import {Observable} from "rxjs/Observable";
import{notification} from'../../models/notification';
import {user} from "../../models/user";
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

    const body = 'message=' + message +
    '&recipient=' + recipient;

    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http.post('https://fptp-unza.herokuapp.com/api/commodity/notify/' + id + '?token=' + token, body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }

  updateInfo(id: number,
             newUsername: string,
             newPassword: string,
             newStreet_address: string,
             newCity: string,
             newProvince: string,
             newCountry:string,
             newEmail:string,
             newPhone_number:number,
  ) {
    const token = this.authService.getToken();
    const body =
      '&id=' +id+
      '&username=' +newUsername +
      '&password='+ newPassword+
     '&street_number=' + newStreet_address +
      '&city='+ newCity +
      '&province='+ newProvince+
      '&country='+  newCountry+
     '&email='+ newEmail+
     '&phone_number=' +newPhone_number;

    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.put('https://fptp-unza.herokuapp.com/api/user/update' +'?token=' + token, body, {headers: headers})
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



  getUserInfo(id: number): Observable<user> {
    const token = this.authService.getToken();
    return this.http.get('https://fptp-unza.herokuapp.com/api/user?token='+token)
      .map((res: Response) => {return res.json().user;})
  }


  resetemail(email:string): Observable<user> {
   let body= '&email='+ email;
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post('https://fptp-unza.herokuapp.com/api/recovery',body,{headers:headers})
      .map((res: Response) => {return res.json()})
  }
}
