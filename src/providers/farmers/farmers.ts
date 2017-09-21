import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx'
import {Observable} from 'rxjs/Rx';
import {user} from '../../models/user';
import {AuthService} from "../../app/auth.service";
/*
  Generated class for the FarmersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FarmersProvider {

  getFarmer():Observable<user[]> {
    const token = this.authService.getToken();
    return this.http.get("http://localhost:8000/api/user/all?token="+token)
      .map((res: Response) => {return res.json().users});


  }
  constructor(public http: Http,public authService: AuthService) {
    console.log('Hello FarmersProvider Provider');
  }

}
