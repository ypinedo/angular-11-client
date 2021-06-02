import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  ipAddress = "";
  constructor(private http: HttpClient) {this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
    this.ipAddress = res.ip;
    console.log("this.ipAddress1:"+this.ipAddress);
  });
  console.log("this.ipAddress2:"+this.ipAddress);
   }

  login(username: string, password: string): Observable<any> {
    console.log("this.ipAddress3:"+this.ipAddress);
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

}
