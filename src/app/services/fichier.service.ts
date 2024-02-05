import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fichier } from '../model/fichier.model';

@Injectable({
  providedIn: 'root'
})
export class FichierService {

  backendHost:string="http://localhost:5000";

  constructor(private http:HttpClient) { }

  public getFichiers():Observable<Array<Fichier>>{
    return this.http.get<Array<Fichier>>(this.backendHost+"/fiche/all")
  }
  public searchFichiers(keyword: string):Observable<Array<Fichier>>{
    return this.http.get<Array<Fichier>>(this.backendHost+"/fiche/all/search?keyword="+keyword)
  }
  public saveFichier(fichier: Fichier):Observable<Fichier>{
    return this.http.post<Fichier>(this.backendHost+"/fiche/create",fichier)
  }
  public deleteFichier(track_id_f: number){
    return this.http.delete(this.backendHost+"/fiche/delete/"+track_id_f);
  }
}
