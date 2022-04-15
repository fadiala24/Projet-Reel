import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBoutiqueService {

  url= 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  authBoutiquier(login, password) {
    return this.http.get(this.url+"Boutiquier/authentificationAdmin/"+login+"&"+password)
  }

  ajoutBoutiquier(data:any){
    return this.http.post(this.url+"Boutiquier/addBoutiquier", data);
  }
  
  listeBoutique() {
    return this.http.get(this.url+'Boutique/listBoutique')
  }

  getAllProduit(){
    return this.http.get(this.url+"Produit/listProduit");
  }

  deleteProduit(id:any){
    return this.http.delete(this.url+"Produit/deleteProduit/"+id,{responseType:'text'});
  }

  getAllProduitBoutique(id:any){
    return this.http.get(this.url+`Produit/getProduitBoutique/${id}`)
  }

  detailProduit(id:any){
    return this.http.get(this.url+`Produit/infoProduit/${id}`);
  }

  updateProduit(id:any, data: any){
    return this.http.put(this.url+`Produit/updateProduit/${id}`, data, {responseType: 'text'});
  }

  getAllCategorie(){
    return this.http.get(this.url+"Category/listCategorie");
  }
  getAllBoutique(){
    return this.http.get(this.url+"Boutique/listBoutique");
  }
  addBoutique(data:any, photo:File){
  
    const forms: FormData = new FormData();
    forms.append('image', photo)
    return this.http.post(this.url+"Boutique/addBoutique",forms);
  }

  addProduit(data:any, photo:File){
  
    const forms: FormData = new FormData();
    forms.append("image", photo)
    console.log("console du service"+ forms);
    
    return this.http.post(this.url+"Produit/addProduit",forms);
  }
  detailBoutique(id:any){
    return this.http.get(this.url +`Boutique/infoBoutique/${id}`);
  }


detailCategorie(id:any){
  return this.http.get(this.url +`Category/infoCategorie/${id}`);
}

listepanie(){
  return this.http.get(this.url+'Panier/listPanier')
}

updateBoutiquier(id:any, data:any) {
  return this.http.put(this.url+`Boutiquier/updateBoutiquier/${id}`, data)
}

listville (etat:boolean){
  return this.http.get(this.url +"Localite/listLocaliteVille/"+etat,{responseType:'text'});
}

quartierId(parentId: any, etat: boolean){
  return this.http.get(this.url+"Localite/listLocaliteQuartier/"+parentId+"/"+etat ,{responseType:'text'});
}

detailLocalite(id:any){
  return this.http.get(this.url +"Localite/infoLocalite/"+id, {responseType:'text'});
}

validBoutique(data:any){
  return this.http.post(this.url+"Boutique/validBoutique",data,{responseType:'text'});
}

detailBoutiquier(id:any){
  return this.http.get(this.url +"Boutiquier/infoBoutiquier/"+id);
}

updateBoutique(id: number, data: any){
  return this.http.put(this.url+"Boutique/updateBoutique/"+id,data,{responseType:'text'});
}

produitBoutique(id:any) {
  return this.http.get(this.url+`Produit/getProduit/${id}`)
}

validBoutiquier(data:any){
  return this.http.post(this.url+"Boutiquier/validBoutiquier",data,{responseType:'text'});
}



}
