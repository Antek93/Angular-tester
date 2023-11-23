import { Component } from '@angular/core';
import { ServizioProvaService } from 'src/app/servizi/servizio-prova.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent {

  constructor(private servizioProva: ServizioProvaService) {}

  ngOnInit(): void {
    console.log("Persone:", this.servizioProva.persone)
  }
}
