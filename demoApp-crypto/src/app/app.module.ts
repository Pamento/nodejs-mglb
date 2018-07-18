import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { MyDataComponent } from './my-data/my-data.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NewProfilComponent } from './new-profil/new-profil.component';


import { MongoService } from './services/mongo.service';
import { DataGlobalAccesService } from './services/data-global-acces.service';
import { AllUsersComponent } from './all-users/all-users.component';


const appRoutes: Routes = [
  { path: 'mydata', component: MyDataComponent },
  { path: 'newuser', component: NewProfilComponent },
  { path: 'newprofile', component: FormComponent },
  { path: 'update', component: UpdateFormComponent },
  { path: 'login', component: InscriptionComponent },
  { path: 'allusers', component: AllUsersComponent },
  { path: '', component: InscriptionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    MyDataComponent,
    UpdateFormComponent,
    InscriptionComponent,
    NewProfilComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MongoService, DataGlobalAccesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
