import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  // Variables
  homeform: FormGroup;

  // Constructor - con importato il service impostato per effettuare le chiamate http
  constructor(private firebase: FirebaseService) {}

  // Functions
  onSubmit() {
    // console.log("primo check", this.homeform);
    // console.log("secondo check", this.homeform.controls);
    // console.log("terzo check", this.homeform.get('colore'));

    // Chiamata al service firebase inizializzato nel costruttore + richiamo alla funzione inserPersona del service
    this.firebase
      .insertPersona(
        // come nel service, inserito il parametro url del nostro real time DB
        'https://corso-angular-ff6d3-default-rtdb.firebaseio.com/persone.json',
        // e un oggetto Body che useremo per inviare i dati
        {
          nome: this.homeform.get('nome')!.value,
          cognome: this.homeform.get('cognome')!.value,
          email: this.homeform.get('email')!.value,
          colore: this.homeform.get('colore')!.value,
        }
      ) // Subscribe perchè abbiamo generarto un Observable con la nostra funzione sul service
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  // Life cycle hooks

  ngOnInit(): void {
    // Reactive Form
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      cognome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl(),
    });
  }
}
