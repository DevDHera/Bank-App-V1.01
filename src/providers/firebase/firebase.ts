import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  //itemsRef: AngularFireList<any>;


  constructor(public afd : AngularFireDatabase) {
   //console.log('Hello FirebaseProvider Provider');
   //this.itemsRef = afd.list('/customerNIC/');
  }

  getNIC() {
    //return this.afd.list('/customerNIC/').valueChanges();
    return this.afd.list('/customerNIC/');
    //this.afd.list('customerNIC').snapshotChanges().map(changes => {
      //return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    //});
  }

  addNIC(nic: string) {
    this.afd.list('/customerNIC/').push(nic);
  }

  removeNIC(key: string) {
    this.afd.list('/customerNIC/').remove(key);
  }

}
