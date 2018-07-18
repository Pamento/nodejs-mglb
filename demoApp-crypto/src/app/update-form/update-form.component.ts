import { Component, OnInit, Input } from '@angular/core';
import { MongoService } from '../services/mongo.service';
import { User } from '../entities/user';
import { NgForm } from '@angular/forms';
import { DataGlobalAccesService } from '../services/data-global-acces.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  userUpdate: User;

  constructor( private mongoService: MongoService,
              private dataGlobalService: DataGlobalAccesService,
              private router: Router ) { }

  ngOnInit() {
    this.userUpdate = this.dataGlobalService.userToUpdate;
  }

  onSubmitUp( form: NgForm ) {
    this.userUpdate.username = form.value.username;
    this.userUpdate.email = form.value.email;
    this.mongoService.updateProfile(this.userUpdate);
    this.router.navigate(['mydata']);
  }

  deleteProfile(id) {
    if(window.confirm('Do you really whant to delete this profile ?')){
      this.mongoService.deleteProfileFromMongo(id);
    }
    this.router.navigate(['mydata']);
  }
}
