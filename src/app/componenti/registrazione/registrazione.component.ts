import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css'],
})
export class RegistrazioneComponent implements OnInit, AfterContentInit {
  // Constructor
  constructor(private authService: AuthService) {}

  // Functions
  onSubmit(form: NgForm) {
    console.log(form);

    // Salviamo i dati che riceviamo in delle variabili che desideriamo salvare.
    const email = form.value.email;
    const password = form.value.password;

    console.log(email, password);

    // Inseriti i dati per la registrazione come previsto da fire base authentication e richiede i seguenti parametri:
    this.authService
      .signUp({
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .subscribe(
        (data) => {
          console.log(data);
        }
      );

    // Cosi, al cliccare sul button del form il form viene svuotato
    form.reset();
  }

  // Life Cycle Hooks
  ngOnInit(): void {}

  ngAfterContentInit(): void {}
}
