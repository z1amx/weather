import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {BehaviorSubject} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private dataUsers = new BehaviorSubject(null);
  getUsers() {
    return this.dataUsers.asObservable();
  }

  constructor(private db: AngularFireDatabase) {
    this.db.list('/').valueChanges().subscribe((datas) => {
      this.dataUsers.next(datas);
    }, (err) => {
      console.log('probleme : ', err);
    });
  }

}
