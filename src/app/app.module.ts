import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { ReactiveFormComponent } from './componenti/reactive-form/reactive-form.component';
// Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './componenti/home/home.component';
import { ProvaComponent } from './componenti/prova/prova.component';
import { SingleContactComponent } from './componenti/single-contact/single-contact.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllContactsComponent } from './componenti/all-contacts/all-contacts.component';
import { EliminaContattiComponent } from './componenti/elimina-contatti/elimina-contatti.component';
import { ModificaContattiComponent } from './componenti/modifica-contatti/modifica-contatti.component';
import { RegistrazioneComponent } from './componenti/registrazione/registrazione.component';
import { LoginComponent } from './componenti/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProvaComponent,
    SingleContactComponent,
    NotfoundComponent,
    ReactiveFormComponent,
    AllContactsComponent,
    EliminaContattiComponent,
    ModificaContattiComponent,
    RegistrazioneComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
