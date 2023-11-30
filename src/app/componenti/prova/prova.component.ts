import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ServizioProvaService } from 'src/app/servizi/servizio-prova.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnInit, OnDestroy {

  interval: any;

  constructor(private servizioProva: ServizioProvaService) {}

  ngOnInit(): void {
    console.log('Persone:', this.servizioProva.persone);

    // Questo è un Observable, importato da rxjs
    // interval infatti, è un evento asincrono
    // Subscribe è un metodo che ci permette di "abbonarci"
    this.interval = interval(1000).subscribe((numero) => {
      console.log(numero);
    });
  }

  ngOnDestroy(): void {
    this.interval.unsubscribe;
  }
}
