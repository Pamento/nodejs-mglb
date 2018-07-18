import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../entities/user';
import { MongoService } from '../services/mongo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  newUser: User;

  constructor( private mongoService: MongoService, private router: Router ) { }

  ngOnInit() {
  }
  onSubmit( form: NgForm ) {
    this.newUser = form.value;
    this.mongoService.login(this.newUser)
    .subscribe(
      (response) => { console.log('Login response : ', response);
                      this.mongoService.responsLoginData = response;
                      localStorage.setItem('token', JSON.stringify(this.mongoService.responsLoginData.id) );
                    console.log('variable response : ',this.mongoService.responsLoginData);
                      this.router.navigate(['mydata']);

                     },
      // () => { console.log('You are login'); },
      (error) => { console.log('Error ! ',error);
    
    
    }
    )
    // this.mongoService.getToken();
  }
}
