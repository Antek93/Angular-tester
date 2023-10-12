// Cervello del component
import { Component } from '@angular/core'; // Serve a importare il component dalla libreria fulcro di Angular

// Decoratore che aggiunge css html e selettore (presente su index.html)
@Component({
  selector: 'app-root', // Nome dele selettore presente su index.html => <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial';
}
