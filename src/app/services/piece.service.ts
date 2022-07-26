import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Piece} from '../model/Piece';
@Injectable({
  providedIn: 'root'
})
export class PieceService {

  constructor(private http: HttpClient) { }
  getPiece() {
    return this.http.get<Piece[]>('http://localhost:3000/pieces/');
  }
  delPiece(id: string){
    return this.http.get('http://localhost:3000/pieces/deletePiece/' + id,);
  }
  updatePiece(data: Piece){
    return this.http.post('http://localhost:3000/pieces/putPiece', data);
  }
  addPiece(data: Piece){
    return this.http.post('http://localhost:3000/pieces/addPiece', data);
  }
  getAbsencebyid(id: string) {
    return this.http.get<Piece>('http://localhost:3000/pieces/piec/' + id);
  }
  importData(data:any|null){
    return this.http.post('http://localhost:3000/pieces/importdata', data);
  }
}
