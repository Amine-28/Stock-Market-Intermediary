import { Http } from '@angular/http';
import { Contact } from 'src/model/model.contact';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class ContactsService{
    constructor(public http:Http){

    }

    saveContact(contact:Contact){
        return this.http.post("http://localhost:8081/contacts",contact)
        .map(resp=>resp.json());
    }
}