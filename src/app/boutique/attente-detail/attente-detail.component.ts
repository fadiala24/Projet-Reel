import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-attente-detail',
  templateUrl: './attente-detail.component.html',
  styleUrls: ['./attente-detail.component.scss']
})
export class AttenteDetailComponent implements OnInit {

  searchText = '';
  id: any;
  boutique: any;
  photo= environment.photo;
  competences: any;
  admin: any;
  adminConnect: any

  constructor(
    private service: ServiceBoutiqueService,
   
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)
    console.log(this.adminConnect);
   

    this.id = this.route.snapshot.params['id'];
    this.service.detailBoutique(this.id).subscribe((data: any)=>{
    this.boutique = JSON.parse(data);
    console.log("okkkkkkkkkkkkkkk",this.boutique);
    
    });


    this.photo;
   
  }

  activer(data: any){
    this.boutique.etat ="ACTIVER";
    this.boutique.administrateur = this.adminConnect;
    this.service.updateBoutique(this.boutique.id, this.boutique).subscribe((datas: any)=>{
      console.log("ooooooooooooo",datas);
      console.log("data",data);
   
      let url: string = "/listBoutiqueAttente/" + datas.id
           window.location.reload();
    this.router.navigateByUrl(url, {skipLocationChange: true}).then(()=>
    this.router.navigate(['/listBoutiqueAttente', datas.id]));
    this.router.navigate(["listBoutique"]);
    
    })
    
  }
  desactiver(data: any){
    this.boutique.etat = "DESACTIVER";
    this.service.updateBoutique(this.boutique.id, this.boutique).subscribe((bout: any)=>{
      let url: string = "/listBoutique/" + bout.id
    window.location.reload();
    this.router.navigateByUrl(url, {skipLocationChange: true}).then(()=>
    this.router.navigate(['listBoutique', bout.id]));
    })
  }

}
