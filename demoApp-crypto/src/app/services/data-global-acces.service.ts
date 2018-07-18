import { Injectable } from '@angular/core';
import { User } from '../entities/user';


@Injectable({
  providedIn: 'root'
})

export class DataGlobalAccesService {
  userToUpdate: User;
  constructor() { }

  getData(user) {
    this.userToUpdate = user;
  }
}