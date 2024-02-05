import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FichierService } from '../services/fichier.service';
import { Observable, map } from 'rxjs';
import { Fichier } from '../model/fichier.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-fichiers',
  templateUrl: './fichiers.component.html',
  styleUrls: ['./fichiers.component.css']
})
export class FichiersComponent implements OnInit {

  fichiers! : Observable<Array<Fichier>> ; 
  errorMessage! : string;
  searchFormGroup : FormGroup | undefined

  constructor(private fichierService: FichierService, private fb : FormBuilder, public authService:AuthService) { }

  ngOnInit(): void {

    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control("")
    });
   /*this.fichiers=this.fichierService.getFichiers();*/
   this.handleSearchFichiers();
  }

  handleSearchFichiers(){
    let kw = this.searchFormGroup?.value.keyword;
    this.fichiers=this.fichierService.searchFichiers(kw);
  }
  /*handleDeleteFichier(f:Fichier){
    this.fichierService.deleteFichier(f.track_id_f).subscribe({
      next:(resp)=>{
        this.handleSearchFichiers();
      },
      error : err=>{
          console.log(err);
      }
    })
  }*/

  handleDeleteFichier(f:Fichier){
    let conf = confirm("Are you sure ?");
    if(!conf) return ; 
    this.fichierService.deleteFichier(f.track_id_f).subscribe({
    next:(resp)=>{
      this.fichiers=this.fichiers.pipe(
        map(data =>{
          let index = data.indexOf(f);
          data.slice(index,1)
          return data ; 
        })
      );
    },
    error : err=>{
        console.log(err);
    }
  })
}
}
