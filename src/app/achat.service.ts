import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import "rxjs/add/operator/map"
import { Achat } from 'src/model/model.achat';

@Injectable()
export class AchatService {
  private headers = new Headers({'Content-type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  constructor(public http:Http){
      
  }

  saveAchat(achat:Achat){
      return this.http.post("http://localhost:4201/achat",achat,this.options).
      map(resp=>resp.json());
  }
}