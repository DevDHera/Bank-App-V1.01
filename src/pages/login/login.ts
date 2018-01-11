import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';

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

  customerNICs: FirebaseListObservable<any[]>;
  newNIC = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.customerNICs = this.firebaseProvider.getNIC();
  }

  addNIC() {
    this.firebaseProvider.addNIC(this.newNIC);
  }

  removeNIC(id) {
    this.firebaseProvider.removeNIC(id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
