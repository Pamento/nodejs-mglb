import { Component, OnInit } from '@angular/core';
import { MongoService } from '../services/mongo.service';
import { DataGlobalAccesService } from '../services/data-global-acces.service';
import { Router } from '@angular/router';
import { User } from '../entities/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor( private mongoService: MongoService,
    private dataGlobalService: DataGlobalAccesService,
    private router: Router ) { }

users: User[];
loginData: any;
ngOnInit() {
// if(this.mongoService.responsLoginData) {
this.mongoService.getToken();
this.mongoService.allUsers()
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
