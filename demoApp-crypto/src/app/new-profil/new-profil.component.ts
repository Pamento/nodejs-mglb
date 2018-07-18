import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm, ReactiveFormsModule, FormsModule, NgModel } from '@angular/forms'
import { User } from '../entities/user';
import { MongoService } from '../services/mongo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-profil',
  templateUrl: './new-profil.component.html',
  styleUrls: ['./new-profil.component.css'],
  providers: [MongoService]
})
export class NewProfilComponent implements OnInit {

  newUser: User;

  constructor( private mongoService: MongoService, private router: Router ) { }

  ngOnInit() { }

  onSubmit( form: NgForm ) {
    this.newUser = form.value;
    this.mongoService.newUser(this.newUser);
    this.router.navigate(['login']);
  }
}
