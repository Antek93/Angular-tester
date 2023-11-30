import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { authGuard } from './auth/auth.guard';
import { ReactiveFormComponent } from './componenti/reactive-form/reactive-form.component';
import { EliminaContattiComponent } from './componenti/elimina-contatti/elimina-contatti.component';
import { ProvaComponent } from './componenti/prova/prova.component';
import { AllContactsComponent } from './componenti/all-contacts/all-contacts.component';
import { ModificaContattiComponent } from './componenti/modifica-contatti/modifica-contatti.component';
import { RegistrazioneComponent } from './componenti/registrazione/registrazione.component';
import { LoginComponent } from './componenti/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: 'about', component: AboutComponent },
  { path: 'prova', component: ProvaComponent},
  // La rotta contact è propetta dal service AuthGuard che abbiamo creato. Se nel service l'utente isLoggedIn = false la rotta è bloccata, se true la rotta è accessibile
  { path: 'contact', component: ContactComponent, canActivate: [authGuard] },
  { path: 'contact/:id', component: ContactComponent },
  { path: 'allcontacts', component: AllContactsComponent },
  { path: 'delete', component: EliminaContattiComponent },
  { path: 'modifica', component: ModificaContattiComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: '404', component: NotfoundComponent },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
