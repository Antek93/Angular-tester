import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  // Inizializziamo i dati dopo aver importato Http Client
  constructor(private http: HttpClient, private authService: AuthService) {}

  // Variables

  // Functions

  // Crea una funzione che richiama http e genera una chiamata post
  insertPersona(url: string, body: {}): Observable<any> {
    // Primo parametro nelle parentesi url, quindi di tipo string
    // Secondo parametro il BODY, che sarà un oggetto
    return this.http.post(url, body);
  }

  // Per ottenere tutte le persone
  getPersone(url: string) {
    return this.http.get(`${url}?auth=${this.authService.user.token}`)
  }

  // Per eliminare una persona specifica
  deletePersona(url: string, id: string) {
    return this.http.delete(`${url}/${id}.json`)
  }

  // Per modificare i dati di una persona speficica
  patchPersona(url: string, id: string, body: {}) {
    return this.http.patch(`${url}/${id}.json`, body)
  }
 }
