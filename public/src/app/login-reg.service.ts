import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginRegService {

  constructor(private _http: Http) { }

registerUser(user){
    return this._http.post('/api/users', user).map(Response=>Response.json()).toPromise();
  }


  loginUser(user){
      return this._http.post('/api/login', user).map(Response=>Response.json()).toPromise();
    }

	// loginUser(user){
 //  		return this._http.post('/api/login', user).map(Response=>Response.json()).toPromise();
 //  	}

  getCurrentUser(){
  	return this._http.get('/api/users/current').map(Response=>Response.json()).toPromise();
  }

  logout(){
  	return this._http.get('/api/users/logout').map(Response=>Response.json()).toPromise();
  }

}
