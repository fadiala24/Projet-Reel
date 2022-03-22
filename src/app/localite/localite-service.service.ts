import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocaliteServiceService {
  url=environment.url;

  constructor(
    private http : HttpClient
  ) 
  { }

 //-------------------------------------------------------Localite  APi service --------------

 getAllLocalite():Observable<any>{
  return this.http.get(this.url+"Localite/listLocalite");
}
addLocalite(data:any){
    
  return this.http.post(this.url+"Localite/addLocalite",data, {responseType:'text'});
}
validLocalite(data:any){
  return this.http.post(this.url+"Localite/validLocalite",data,{responseType:'text'});
}

deleteLocalite(id:any){
  return this.http.delete(this.url+"Localite/deleteLocalite/"+id,{responseType:'text'});
}


detailLocalite(id:any){
  return this.http.get(this.url +"Localite/infoLocalite/"+id, {responseType:'text'});
}
updateLocalite(id: any, data: any){
  return this.http.put(this.url+"Localite/updateLocalite/"+id, data,  {responseType:'text'});
}

quartierId(parentId: any, etat: boolean){
  return this.http.get(this.url+"Localite/listLocaliteQuartier/"+parentId+"/"+etat ,{responseType:'text'});
}

listville (etat:boolean):Observable<any>{
  return this.http.get(this.url +"Localite/listLocaliteVille/"+etat,{responseType:'text'});
}

listQuartier(etat:boolean){
  return this.http.get(this.url + "Localite/listLocaliteQuartier/"+etat,{responseType:'text'})
}

}
