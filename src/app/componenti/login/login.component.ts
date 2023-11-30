import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterContentInit {
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
      .login(email, password)
      .subscribe((data: any) => {
        console.log(data);
        // Dobbiamo convertire l'expiration date in un data, perché il servizio ci restuisce solo dei secondi
        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
        // Creiamo un utente nel momento in cui effettuiamo il login
        this.authService.createUser(data.email, data.localId, data.idToken, expirationDate)
        // Per permettere all'utente di rimanere loggato dobbiamo salvare i dati di login nel local storage
        localStorage.setItem('user', JSON.stringify(this.authService.user))

        console.log(this.authService.user);

      });

    // Cosi, al cliccare sul button del form il form viene svuotato
    form.reset();
  }

  // Life Cycle Hooks
  ngOnInit(): void {}

  ngAfterContentInit(): void {}
}
