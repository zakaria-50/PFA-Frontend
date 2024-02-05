import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fichier } from '../model/fichier.model';
import { FichierService } from '../services/fichier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-fichier',
  templateUrl: './new-fichier.component.html',
  styleUrls: ['./new-fichier.component.css']
})
export class NewFichierComponent implements OnInit {

  newFichierFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private fichierService:FichierService, private router: Router) { }

  ngOnInit(): void {
    this.newFichierFormGroup=this.fb.group({
      track_id_f : this.fb.control(null) ,
      license_plate_text_f: this.fb.control(null, [Validators.required, Validators.minLength(6)]) , 
      color : this.fb.control(null, [Validators.required]) ,
      Type:this.fb.control(null, [Validators.required]) ,
      operation : this.fb.control(null, [Validators.required])  
    })
  }

  handleSaveFichier(){
    let fichier:Fichier=this.newFichierFormGroup.value;
    this.fichierService.saveFichier(fichier).subscribe({
      next : data=>{
        alert("File has been saved successfully !" )
        //this.newFichierFormGroup.reset();
        this.router.navigateByUrl("/fichiers")
      },
      error : err=>{
        console.log(err);
      }
    });
  }

}
