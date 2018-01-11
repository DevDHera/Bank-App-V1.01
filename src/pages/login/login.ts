import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
//import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //customerNICs: FirebaseListObservable<any[]>;
  customerNICs: Observable<any[]>;
  newNIC = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.customerNICs = this.firebaseProvider.getNIC().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
    });
    //this.customerNICs = this.firebaseProvider.
  }

  

  addNIC() {
    this.firebaseProvider.addNIC(this.newNIC);
  }

  removeNIC(key: string) {
    this.firebaseProvider.removeNIC(key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
