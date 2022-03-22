import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceProduitService {
  url=environment.url;

  constructor(
    private http : HttpClient
  ) 
  { }

 //-------------------------------------------------------Produit  APi service --------------

 getAllProduit():Observable<any>{
  return this.http.get(this.url+"Produit/listProduit");
}
addProduit(data:any, photo:File):Observable <any>{
  
  const forms: FormData = new FormData();
  forms.append("image", photo)
  console.log("console du service"+ forms);
  
  return this.http.post(this.url+"Produit/addProduit",forms);
}
validProduit(data:any){
  return this.http.post(this.url+"Produit/validProduit",data,{responseType:'text'});
}
restoreProduit(id:any, userId:number){
  return this.http.delete(this.url+"Produit/restoreProduit/"+id+"&"+userId,{responseType:'text'});
}
deleteProduit(id:any){
  return this.http.delete(this.url+"Produit/deleteProduit/"+id, {responseType:'text'});
}


detailProduit(id:any){
  return this.http.get(this.url +"Produit/infoProduit/"+id, {responseType:'text'});
}

nombreProduit(){
  return this.http.get(this.url +"Produit/nombreProduit");
}

updateProduit(id: any, data: any){
  return this.http.put(this.url+`Produit/updateProduit/${id}`, data,  {responseType:'text'});
}
}
