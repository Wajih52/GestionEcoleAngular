import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cours } from '../models/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http:HttpClient) { }
  getcours() {
    return this.http.get('http://localhost:3000/cours/afficher')
  }

  adddcours(data:any) {
    return this.http.post('http://localhost:3000/cours/add', data, { observe: 'response' })
  }
  delcours(id:any) {
    return this.http.delete('http://localhost:3000/cours/delete/'+id)
  }
  updatecours(data:any) {
    return this.http.post('http://localhost:3000/cours/putform/',data);
  }
  getcoursbyid(id:any) {
    return this.http.get<cours>('http://localhost:3000/cours/details/'+id);
  } 
  uploadcours(data:any) {
    return this.http.post('http://localhost:3000/api/upload',data);
  }
  
    upload(file: File): Observable<HttpEvent<any>> {
      const formData: FormData = new FormData();
      formData.append('file', file);
      const req = new HttpRequest('POST', 'http://localhost:3000/cours/upload', formData, {
        reportProgress: true,
        responseType: 'json'
      });
      return this.http.request(req);
    }
    getFiles(): Observable<any> {
      return this.http.get('http://localhost:3000/cours/files').pipe();
    }
    uploadfile(file):Observable<any> {
  
      // Create form data
      const formData = new FormData(); 
        
      // Store form name as "file" with file data
      formData.append("file", file, file.name);
        
      // Make http post request over api
      // with formData as req
      return this.http.post("http://localhost:3000", formData)
  }
  sendemail(data:string){
    return this.http.post<any>("http://localhost:3000/send-email",{data:data});
  }
}
