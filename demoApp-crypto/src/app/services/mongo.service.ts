import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../entities/user';
import { Router } from '@angular/router';


@Injectable()
export class MongoService {
  responsLoginData: any;
  token: string;

  getToken() {
    this.token = JSON.parse(localStorage.getItem('token'));
    console.log('mgServece : token from store : ',this.token);
  }

  constructor( private http: HttpClient, private router: Router ) { }

  /**
   * @method CRUD for mognoDB
   */
  getProfileFromMongodb() {
    return this.http.get<User[]>(`http://localhost:3000/api/usershubs?access_token=${this.token}`);
  }
  getById(id) {
    return this.http.get<User>(`http://localhost:3000/api/usershubs/${id}?access_token=${this.token}`);
  }
  saveProfileToMongodb(newUser) {
    this.getToken();
    this.http.post(`http://localhost:3000/api/usershubs?access_token=${this.token}`, newUser)
    .subscribe(
      () => { console.log('Enregistrement terminé !'); },
      (error) => { console.log('Error ! : ',error); }
    )
  }
  deleteProfileFromMongo(id) {
    this.http.delete(`http://localhost:3000/api/usershubs/${id}?access_token=${this.token}`)
    .subscribe(
      () => { console.log('User is deleted !'); },
      (error) => { console.log('Error ! : ',error) }
    )
  }
  updateProfile(profile) {
    this.http.post(`http://localhost:3000/api/usershubs/${profile.id}/replace?access_token=${this.token}`, profile)
    .subscribe(
      () => { console.log('The profile is updated !'); },
      (error) => { console.log('Error ! : ',error); }
    )
  }


  /**
   * @method USER : newUser, login, logout
   */
  allUsers():any{
    return this.http.get<User[]>(`http://localhost:3000/api/Users?access_token=${this.token}`);
  }
  newUser(profile) {
    this.http.post('http://localhost:3000/api/Users', profile )
    .subscribe(
      (response) => { console.log('response post newUser : ',response)},
      (error) => { console.log('Error ! ', error)}
    )
  }
  login(profile) {
    return this.http.post('http://localhost:3000/api/Users/login',profile);
  }
  logout() {
    this.http.post(`http://localhost:3000/api/Users/logout?access_token=${this.token}`, this.responsLoginData )
    .subscribe(
      (error) => { console.log('Error ! ',error);}
    );
    localStorage.removeItem('token');
    this.token = null;
    this.router.navigate(['mydata']);
  }
}
