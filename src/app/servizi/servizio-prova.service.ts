import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {

  persone = [
    {nome:"Luca", cognome:"Rossi", isOnline: true, color: "blue"},
    {nome:"Marco", cognome:"Neri", isOnline: false, color: "red"},
    {nome:"Anna", cognome:"Sole", isOnline: false, color: "yellow"},
    {nome:"Leonardo", cognome:"Qwerty", isOnline: true, color: "green"},
    {nome:"Pannocchia", cognome:"Babbo", isOnline: false, color: "purple"}

  ]
  constructor() {}

    getPersone(){
      return this.persone
    }

    getPersona(index: number) {
      return this.persone[index]
    }
}
