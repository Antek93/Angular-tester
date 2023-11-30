import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-elimina-contatti',
  templateUrl: './elimina-contatti.component.html',
  styleUrls: ['./elimina-contatti.component.css'],
})
export class EliminaContattiComponent implements OnInit {
  // Variables
  persone: object;
  url: string = "https://corso-angular-ff6d3-default-rtdb.firebaseio.com/persone";
  idToDelete: string = "-NkLrB0bdQmFtcjJ1SJ0";

  // Functions
  onDeletePersona() {
    this.firebase
      .deletePersona(
        this.url,
        this.idToDelete
      )
      .subscribe((data) => {
        console.log("Elemento eliminato con successo", data);
      });
  }

  // Costruttore
  constructor(private firebase: FirebaseService) {}

  // Life Cycle Hooks
  ngOnInit(): void {}
}
