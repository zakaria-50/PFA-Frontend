import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detections',
  templateUrl: './detections.component.html',
  styleUrls: ['./detections.component.css']
})
export class DetectionsComponent implements OnInit {

  detections : any ; 

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:5000/detection/all").subscribe({
      next: (data)=> {
        this.detections=data; 
      },
      error : (err)=> {
        console.log(err);
      }
    });
}
}