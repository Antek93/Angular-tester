import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioProvaService } from 'src/app/servizi/servizio-prova.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  persone: any;
  persona: any;
  isProfile: boolean;

  constructor(
    private servizioProva: ServizioProvaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // qui estrapoliamo i dati dellla rotta attivata, andando a prendere il parametro /:id
    this.route.snapshot.paramMap.get('id');

    // Se il parametro id viene rilevato
    if (this.route.snapshot.paramMap.get('id')) {
      // La variabile is Profile diventa true (Cosi da mostrare il secondo blocco [quello in else] dell'html)
      this.isProfile = true;

      // Se un id viene rilevato, richiama dal service la funzione get Persona - per richiamare un utente specifico.
      // Come specificato sul service getPersona(index) richiede un numero come parametro
      // Passiamo quindi lo stesso id rilevato dalla rotta come parametro da passare
      this.persona = this.servizioProva.getPersona(
        parseInt(this.route.snapshot.paramMap.get('id')!)
      );
    } else {
      // Se nessun id viene specificato, isProfile diventa false (Cosi da mostrare il primo blocco [quello in ngif] dell'html)
      this.isProfile = false;

      // Se nessun id viene rilevato, richiama dal service la funzione get Persone - per richiamare tutti gli elementi in contatti
      this.persone = this.servizioProva.getPersone();
    }
  }
}
