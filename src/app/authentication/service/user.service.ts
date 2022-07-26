import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getusers() {
    return this.http.get('http://localhost:3001/api/v1/users/')
  }

  adduser(data:any) {
    return this.http.post('http://localhost:3001/api/v1/users/', data)
  }
  deluser(id:any) {
    return this.http.delete('http://localhost:3001/api/v1/users/'+id)
  }
  updateuser(id:any ,data:any) {
    return this.http.put('http://localhost:3001/api/v1/users/'+id,data)
  }

  login(email:String, password:String ) { {
    return this.http.post('http://localhost:3001/api/v1/users/login',{email,password})
  }
}

resetpass(data:any) {
  return this.http.post('http://localhost:3001/api/v1/users/resetpassword', data)
}}
