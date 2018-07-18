import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm, ReactiveFormsModule, FormsModule, NgModel } from '@angular/forms'
import { User } from '../entities/user';
import { MongoService } from '../services/mongo.service';
import { Router } from '@angular/router';

// @NgModule({
//   imports: [FormsModule,ReactiveFormsModule],
//   exports: [NgForm],
// })
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [MongoService]
})

export class FormComponent implements OnInit {

  newUser: User;

  constructor( private mongoService: MongoService, private router: Router ) { }

  ngOnInit() { }

  onSubmit( form: NgForm ) {
    this.newUser = form.value;
    this.mongoService.saveProfileToMongodb(this.newUser);
    this.router.navigate(['mydata']);
  }

}