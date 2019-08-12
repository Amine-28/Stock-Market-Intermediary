import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from 'src/model/model.contact';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  contact:Contact=new Contact();
  constructor(public contactService:ContactService) { }

  ngOnInit() {
  }
  saveContact(contact:Contact){
    this.contactService.saveContact(this.contact)
    .subscribe((data)=>{
      console.log(data)
    },(err)=>{
      console.log(err);
    })
  }

}
