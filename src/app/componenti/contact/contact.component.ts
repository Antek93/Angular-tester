import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioProvaService } from 'src/app/servizi/servizio-prova.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  persone: any
  isProfile: boolean

   constructor(private servizioProva: ServizioProvaService, private route: ActivatedRoute) {}

   ngOnInit(): void {
     this.persone = this.servizioProva.getPersone()
     this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true
     this.route.snapshot.paramMap.get('id') // qui estrapoliamo i dati 
   }
}