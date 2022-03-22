import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceloginService {
  url=environment.url;
  constructor(
    private http: HttpClient
    ) { }

  public login(login: string, password: string) {
    return this.http.get(this.url+"Admin/authentificationAdmin/"+login+"&"+password)
  }

  public SetLogin(login: string) {
    localStorage.setItem("login", login)
  }

  public getLogin(){
    return localStorage.getItem("login")
  }

  public SetPassword(password: string) {
    localStorage.setItem("password", password)
  }

  public getPassword(){
    return localStorage.getItem("password")
  }
}
