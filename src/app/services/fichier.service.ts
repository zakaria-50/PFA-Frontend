import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fichier } from '../model/fichier.model';

@Injectable({
  providedIn: 'root'
})
export class FichierService {

  constructor(private http:HttpClient) { }

  public getFichiers():Observable<Array<Fichier>>{
    return this.http.get<Array<Fichier>>("http://localhost:5000/fiche/all")
  }
}
