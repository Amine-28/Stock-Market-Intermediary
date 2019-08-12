import { Component, OnInit } from '@angular/core';
import { Achat } from 'src/model/model.achat';
import { AchatService } from '../achat.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {
  achat:Achat=new Achat();
  
  constructor(public achatService:AchatService) { 
    
  }

  ngOnInit() {
  }

  saveAchat(achat:Achat){
    this.achatService.saveAchat(this.achat)
    .subscribe((data)=>{
      console.log(data)
    },(err)=>{
      console.log(err);
    })
  }
}