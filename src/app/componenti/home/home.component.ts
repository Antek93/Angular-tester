import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterContentInit {
  // Constructor - con importato il service impostato per effettuare le chiamate http
  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {}

  onSubmit(form: any) {
    console.log(form);
  }
}
