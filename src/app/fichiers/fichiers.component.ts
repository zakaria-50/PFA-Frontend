import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FichierService } from '../services/fichier.service';
import { Observable } from 'rxjs';
import { Fichier } from '../model/fichier.model';


@Component({
  selector: 'app-fichiers',
  templateUrl: './fichiers.component.html',
  styleUrls: ['./fichiers.component.css']
})
export class FichiersComponent implements OnInit {

  fichiers! : Observable<Array<Fichier>> ; 
  errorMessage! : string;

  constructor(private fichierService: FichierService) { }

  ngOnInit(): void {
   this.fichiers=this.fichierService.getFichiers();
  }

}
