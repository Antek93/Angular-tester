import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Variables:
  /*         */
  isLoggedIn = true;
  // Chiave API del nostro progetto Angular su FireBase (fake database)
  APIkey = 'AIzaSyApskH72z3N6OUrhpHiuvw2wx8f5do8HXQ';
  // Url per simulare iscrizione con mail e password
  urlIscriviti = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIkey}`;
  // Url per simulare accesso login con mail e password
  urlAccedi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIkey}`;

  // Creazione simulata di un utente, sfruttando il modello USER, primo step creare variabile user
  user: User

  // Costruttore
  constructor(private http: HttpClient) {}

  // Crare un utente sfruttando il modello
  createUser(email: string, id: string, token: string, expirationDate: Date) { 
    this.user = new User(email, id, token, expirationDate)
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  signUp(body: {}) {
    return this.http.post(this.urlIscriviti, body);
  }

  // Login e Signup potrebbero avere la stessa struttura, lo utilizziamo diversamente solo per esempio

  login(email: string, password: string) {
    return this.http.post(this.urlAccedi, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
}
