import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd : AngularFireDatabase) {
   //console.log('Hello FirebaseProvider Provider');
  }

  getNIC() {
    return this.afd.list('/customerNIC/');
  }

  addNIC(nic) {
    this.afd.list('/customerNIC/').push(nic);
  }

  removeNIC(id) {
    this.afd.list('/customerNIC/').remove(id);
  }

}
