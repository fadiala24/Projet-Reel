import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url= 'http://localhost:8080/api/'

  constructor(private http: HttpClient) { }

  listeProduits(){
    return this.http.get(this.url+'Produit/listProduit')
  }

  detailProduit(id:any){
    return this.http.get(this.url+`Produit/infoProduit/${id}`)
  }

  listeVille(){
    return this.http.get(this.url+'Localite/listLocalite')
  }

  BoutiqueVille(id:any) {
    return this.http.get(this.url+`Boutique/listBoutiqueVille/${id}`)
  }

  BoutiqueDetail(id:any) {
    return this.http.get(this.url+`Boutique/infoBoutique/${id}`)
  }

  listeBoutique() {
    return this.http.get(this.url+'Boutique/listBoutique')
  }

  produitBoutique(id:any) {
    return this.http.get(this.url+`Produit/getProduit/${id}`)
  }
  
}
