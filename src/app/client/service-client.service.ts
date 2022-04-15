import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceClientService {

  url= 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  authClient(login, password) {
    return this.http.get(this.url+"Client/authentificationClient/"+login+"&"+password)
  }

  public setNom(nom){
    localStorage.setItem('nom', nom)
  }

  public setPrenom(prenom){
    localStorage.setItem('prenom', prenom)
  }

  public setLogin(login){
    localStorage.setItem('login', login)
  }

  public setPassword(password){
    localStorage.setItem('password', password)
  }

  public getNom(){
    return localStorage.getItem('nom')
  }

  public getPrenom(){
    return localStorage.getItem('prenom')
  }

  public getLogin(){
    return localStorage.getItem('login')
  }

  public getPassword(){
    return localStorage.getItem('password')
  }

  listepanier(){
    return this.http.get(this.url+'Panier/listPanier')
  }

  modifierClient(id:any , data:any){
    return this.http.put(this.url+`Client/updateClient/${id}`, data)
  }

  detailClient(id:any){
    return this.http.get(this.url+`Client/infoClient/${id}`)
  }

  ajoutClient(data:any, photo: File) {
    const forms: FormData = new FormData();
    forms.append('image', photo)
    return this.http.post(this.url+"Client/addClient", forms)
  }

  ajoutPanier(data:any) {
    return this.http.post(this.url+"Panier/addPanier", data)
  }

  updateProduit(id:any, data: any){
    return this.http.put(this.url+`Produit/updateProduit/${id}`, data, {responseType: 'text'});
  }

  validClient(data:any){
    return this.http.post(this.url+"Client/validClient",data,{responseType:'text'});
  }

  annuler(id:any){
    return this.http.get(this.url+`Panier/desactiverPanier/${id}`)
  }
  
  
}
