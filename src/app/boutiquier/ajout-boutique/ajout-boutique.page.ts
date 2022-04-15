import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { AlertController, ToastController } from '@ionic/angular';
import { Boutiques } from 'src/app/boutique';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-ajout-boutique',
  templateUrl: './ajout-boutique.page.html',
  styleUrls: ['./ajout-boutique.page.scss'],
})
export class AjoutBoutiquePage implements OnInit {

  latitude: any;
  longitude: any;
  liste: any;
  user: any;
  ville: any;
  VilleId: any;
  quartier: any;
  imgURL: any;
  imagePath: any;
  photo: File | any;

  boutique = new Boutiques();
  

  constructor(
    private geolocation: Geolocation, 
    private service: ServiceBoutiqueService, 
    private toastController: ToastController,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('boutiquier'));
    this.getCurrentCoordinates();
    this.afficherVille(true);
  }

  afficherVille(etat: boolean) {
    this.service.listville(etat).subscribe(
      (data) => {
        this.ville = JSON.parse(data);
      }
    )
  }

  onChangeObj(newObj: any) {
    this.afficherQuartier(newObj, true);
    this.VilleId = newObj;
  }


  afficherQuartier(parentId: any, etat: boolean) {
    this.service.quartierId(parentId, etat).subscribe(
      (data) => {
        this.quartier = JSON.parse(data);
      }
    )
  }

  view(files) {
    this.photo = files.target.files[0];
    console.log(files[0].name);

    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
     
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  ajoutService(form: NgForm) {
    if (form.valid) {
    this.boutique.nom = form.value['nom'];
    this.boutique.latitude = form.value['latitude'];
    this.boutique.longitude = form.value['longitude'];
    console.log("boutique ====",this.boutique);

    this.service.addBoutique(this.boutique, this.photo).subscribe((data: any) => {
      console.log("photo",data);

      // this.service.detailBoutiquier(form.value['boutiquier']).subscribe((boutiquier: any) => {
      //   console.log("---boutiquier---", boutiquier);
        this.service.detailLocalite(form.value['quartier']).subscribe((quarti: any) => {
          console.log("---quartier---", JSON.parse(quarti));

          this.service.detailLocalite(form.value['ville']).subscribe((villle: any) => {
            console.log("---ville---", JSON.parse(villle));
      
      let bout = {
        'nom': form.value['nom'],

        'longitude': form.value['longitude'],
        'latitude': form.value['latitude'],
        'quartier': JSON.parse(quarti),
        'boutiquier': this.user,
        'etat' : 'DESACTIVER',
        
       
        'ville': JSON.parse(villle),
        'photo': this.photo.name
      }
      console.log("---BBBBBBBBB---", bout);

      this.service.updateBoutique(data.id, bout).subscribe((dat: any) => {
        console.log("helle ++++++++++++", dat);
        form.reset();
        this.presentConfirm();
      })
    })
  }) 
// })


    })
  } else {
    this.presentToast1();
  }
}
  

  options = {
    timeout: 10000, 
    enableHighAccuracy: true, 
    maximumAge: 3600
  };
  // use geolocation to get user's device coordinates
  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(resp);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  async presentConfirm() {
    let alert = this.alertCtrl.create({
      header: 'Demande réçu',
      message: "Votre boutique sera soummit à l'équipe SUMA pour validation !",
      mode:'ios',
      buttons: [
        {
          text: 'Ok',
          cssClass:'icon-color',
          handler: data => {
            //Call you API to remove Items here.
            this.router.navigateByUrl('/acceuil-boutiquier')
          }
        }
      ]
    });
    (await alert).present();
  }

  async presentToast1() {
    const toast = await this.toastController.create({
      icon: 'close',
      message: 'Veuillez bien renseigner le formulaire',
      duration: 2000,
      position: 'top',
      cssClass: 'danger',
    });
    toast.present();
  }

}
