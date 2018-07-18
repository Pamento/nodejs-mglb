import { Component, OnInit } from '@angular/core';
import { MongoService } from '../services/mongo.service';
import { User } from '../entities/user';
import { Router } from '@angular/router';
import { DataGlobalAccesService } from '../services/data-global-acces.service';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css']
})
export class MyDataComponent implements OnInit {

  constructor( private mongoService: MongoService,
                private dataGlobalService: DataGlobalAccesService,
                private router: Router ) { }

  users: User[];
  loginData: any;
  ngOnInit() {
    // if(this.mongoService.responsLoginData) {
      this.mongoService.getToken();
      this.mongoService.getProfileFromMongodb()
      .subscribe(
        (response) => { this.users = response },
        (error) => { console.log('Error ! ',error) }
      )
    // } else {
    //   console.log('now data in bus');
    // }
  }
  goToUpdate(user) {
    this.dataGlobalService.getData(user);
    this.router.navigate(['update']);
  }
  goToNewProfileForm() {
    this.router.navigate(['newprofile']);
  }
  getLoginData() {
    this.loginData = this.mongoService.responsLoginData;
  }

}
