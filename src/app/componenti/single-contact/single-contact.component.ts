import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent implements OnInit {
  @Input() persona: any

  constructor() {}

  ngOnInit(): void {
      
  }
}
