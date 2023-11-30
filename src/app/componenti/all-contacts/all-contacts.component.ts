import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css'],
})
export class AllContactsComponent implements OnInit {
  persone: object;

  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {
    // recuperiamo i dati di persone direttamente dal nostro DB firebase
    // diversamente dal component contact -> che richama il service persone della nostra applicazione
    this.firebase
      .getPersone(
        'https://corso-angular-ff6d3-default-rtdb.firebaseio.com/persone.json'
      )
      .subscribe((data: any) => {
        // Effettuiamo operazione di MAPPING per prendere i dati che ci arrivano e li sistemiamo in modo più opportuno
        this.persone = Object.keys(data).map((key) => {
          return data[key];
        });

        console.log(
          'Ciao, sono la variabile persone',
          this.persone,
          typeof this.persone
        );
      });
  }
}
