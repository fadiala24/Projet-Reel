import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocaliteServiceService } from '../localite-service.service';

@Component({
  selector: 'app-detaillocalite',
  templateUrl: './detaillocalite.component.html',
  styleUrls: ['./detaillocalite.component.scss']
})
export class DetaillocaliteComponent implements OnInit {

  detailLocalite: any;
  id: any;
  loginData:any
  constructor(public service: LocaliteServiceService, 
    public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.loginData=localStorage["isLogin"];
    this.id = this.route.snapshot.params['id'];
    this.service.detailLocalite(this.id).subscribe(data=>{
      console.log(JSON.parse(data));
      this.detailLocalite = JSON.parse(data);
      
    })
  }
  getAllLocalite(){
    this.detailLocalite=[];
    this.service.getAllLocalite().subscribe((data:any)=> {
      console.log(data);
      this.detailLocalite= data;
    })
    //  this.listeServices=this.service.getAllAdmin();
    console.log("hors boucle====",this.detailLocalite);
  }

  }


