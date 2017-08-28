
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
  
  login(username: string, password: string): Observable<boolean> {
    
    return this.http.post('http://localhost:8000/api/auth/login', 
    {username: username, password: password},
    {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}
    )
    .map(
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
