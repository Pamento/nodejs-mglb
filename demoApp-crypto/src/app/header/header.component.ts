import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MongoService } from '../services/mongo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private mongoService: MongoService, private router: Router ) { }

  ngOnInit() {
  }

  goToNewUserForm() {
    this.router.navigate(['newuser']);
  }
  goToAllUers() {
    this.router.navigate(['allusers']);
  }
  getAllData() {
    console.log("my data clicked");
    if(this.mongoService.token){
      console.log(this.mongoService.token);
    this.router.navigate(['mydata'])
    } else {
      alert('You are logout, \n please login for see data.');
    }
  }
  login() {
    this.router.navigate(['login']);
  }
  logout() {
    this.mongoService.logout();
  }
}
