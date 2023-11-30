// Cervello del component
import { Component, OnInit } from '@angular/core'; // Serve a importare il component dalla libreria fulcro di Angular
import { AuthService } from './auth/auth.service';

// Decoratore che aggiunge css html e selettore (presente su index.html)
@Component({
  selector: 'app-root', // Nome dele selettore presente su index.html => <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'tutorial';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');

    if (storedUser !== null) {
      const user = JSON.parse(storedUser);
      this.authService.createUser(
        user.email,
        user.id,
        user._token,
        user._expirationDate
      );
    }
  }
}
