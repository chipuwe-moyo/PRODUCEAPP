
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/Rx'
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

  constructor(private http: Http){

    const currentUser =JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  public token : string;

  login(credentials): Observable<boolean> {

    let headers = new Headers();
    //headers.append('Access-Control-Request-Origin', 'http://localhost:8100');
    return this.http.post('http://localhost:8000/api/auth/login', JSON.stringify(credentials)).map(
      (response: Response) => {
        let token = response.json() && response.json().token;
        if (token) {

          this.token = token;

          localStorage.setItem('token', token);


          return true;

        } else {

          localStorage.setItem('fail', 'fail');
          return false;
        }

      });
  }
}
