import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-modifica-contatti',
  templateUrl: './modifica-contatti.component.html',
  styleUrls: ['./modifica-contatti.component.css'],
})
export class ModificaContattiComponent implements OnInit {
  // Costruttore
  constructor(private firebase: FirebaseService) {}

  // Variables
  persone: object;
  url: string =
    'https://corso-angular-ff6d3-default-rtdb.firebaseio.com/persone';
  idToDelete: string = '-NkQD0HI0XX9gs6ICsO2';

  // Functions
  onPatchPersona() {
    this.firebase
      .patchPersona(this.url, this.idToDelete, {
        nome: "Gabriella",
        cognome: "Radogna",
        email: "gabriella.radogna@gmail.com"
      })
      .subscribe((data) => {
        console.log('Elemento modificato con successo', data);
      });
  }

  onSubmit(form: any) {
    console.log(form);
  }

  // Life Cycle Hooks
  ngOnInit(): void {}
}
