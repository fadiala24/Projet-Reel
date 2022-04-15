import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ServiceClientService } from '../service-client.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.page.html',
  styleUrls: ['./register-client.page.scss'],
})
export class RegisterClientPage implements OnInit {

  imgURL: any;
  imagePath: any;
  photo: File | any;

  constructor(private service: ServiceClientService, private toastController: ToastController) { }

  ngOnInit() {
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

  ajout(form: NgForm) {
    if(form.valid) {
      this.service.validClient(form.value).subscribe((data:any)=> {
        
        if(data === 'login') {
          this.presentToast2();
        } else if (data === 'telephone') {
          this.presentToast3();
        } else {
          console.log('data', form.value);
          this.service.ajoutClient(form.value, this.photo ).subscribe((data1:any)=> {
            console.log('data1', data1);

            let profil = {
              'nom' : form.value['nom'],
              'prenom' : form.value['prenom'],
              'telephone': form.value['telephone'],
              'login' : form.value['login'],
              'password' : form.value['password'],
              'photo' : this.photo.name,
            }
            console.log('data2', profil),

            this.service.modifierClient(data1.id, profil).subscribe((data2:any)=> {
              console.log('profil', data2)
            })
            form.reset();
            this.presentToast();
          })
        }
      })
    } else if (form.invalid) {
      this.presentToast1();
    } else {
      this.presentToast1();
    }

    if(form.invalid) {
      this.presentToast1();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      icon: 'checkmark',
      message: 'Compte crée avec succèss',
      duration: 2000,
      position: 'top',
      cssClass: 'success',
    });
    toast.present();
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

  async presentToast2() {
    const toast = await this.toastController.create({
      icon: 'close',
      message: 'Ce login existe déjà',
      duration: 2000,
      position: 'top',
      cssClass: 'danger',
    });
    toast.present();
  }

  async presentToast3() {
    const toast = await this.toastController.create({
      icon: 'close',
      message: 'Ce numéro de téléphone existe déjà',
      duration: 2000,
      position: 'top',
      cssClass: 'danger',
    });
    toast.present();
  }

}
