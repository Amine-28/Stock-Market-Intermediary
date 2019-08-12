import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { Contact } from 'src/model/model.contact';
import "rxjs/add/operator/map"

@Injectable()
export class ContactService {
  private headers = new Headers({'Content-type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  constructor(public http:Http){
      
  }

  saveContact(contact:Contact){
      return this.http.post("http://localhost:4201/contacts",contact,this.options).
      map(resp=>resp.json());
  }
}