import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { Stock } from 'src/app/stock';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-ajout-stock',
  templateUrl: './ajout-stock.page.html',
  styleUrls: ['./ajout-stock.page.scss'],
})
export class AjoutStockPage implements OnInit {
  id: any;
  cat: any;
  imgURL: any;
  imagePath: any;
  photo: File | any;
  stock = new Stock();
  catId: any;
  bout: any;
  boutiq: any;
  id1: any;
  boutd: any;

  constructor(
    private service: ServiceBoutiqueService,
    //  private nav: NavParams, 
     private modalController: ModalController,
     private toastController: ToastController,
     private route: ActivatedRoute
     ) { }

  ngOnInit() {
    // this.id = this.nav.get('det');
    this.id1 = this.route.snapshot.params['id'];
    console.log(this.id1);
    this.service.getAllCategorie().subscribe((data:any)=> {
      this.cat = data;
      console.log(data);
    })
    this.service.detailBoutique(this.id1).subscribe((data:any)=> {
      this.boutd = data;
      console.log(data);
    })
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
      this.stock.nom = form.value['nom'];
      this.stock.prix_achat = form.value['prix_achat'];
      this.stock.prix_unitaire = form.value['prix_unitaire'];
      this.stock.quantite = form.value['quantite'];
      this.stock.unite = form.value['unite'];

      console.log("iciiiiiii",this.stock);

      // ----------------- ajout photo ---------------
      this.service.addProduit(this.stock, this.photo).subscribe((dat:any)=> {
        console.log("photo",dat);

         // ----------------- detail categorie ---------------
        this.service.detailCategorie(form.value['category']).subscribe((categ:any)=> {
          console.log("cattttttt",categ);

          let bout = {
            'nom': form.value['nom'],
            'quantite': form.value['quantite'],
            'prix_unitaire': form.value['prix_unitaire'],
            'prix_achat': form.value['prix_achat'],
            'photo': this.photo.name,
            'category': categ,
            'boutiques' : this.boutd,
            'unite' : form.value['unite']
          }
          console.log("boutiqueeee:",bout);

          // this.stock.nom = form.value['nom'];
          // this.stock.prix_achat = form.value['prix_achat'];
          // this.stock.prix_unitaire = form.value['prix_unitaire'];
          // this.stock.quantite = form.value['quantite'];
          // this.stock.category = categ;
          // this.stock.boutiques = this.id;
          // this.stock.photos = this.photo[0].name,
          // console.log("stockkkkkk", this.stock)
          this.service.updateProduit(dat.id, bout).subscribe((data:any)=> {
            console.log("okkkkkk produit", data);
            this.presentToast();
            form.reset();
          })
        })
      })
    } else {
      this.presentToast1();
    }

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

  async presentToast() {
    const toast = await this.toastController.create({
      icon: 'checkmark',
      message: 'Stock ajouté avec succèss',
      duration: 2000,
      position: 'top',
      cssClass: 'success',
    });
    toast.present();
  }

}
