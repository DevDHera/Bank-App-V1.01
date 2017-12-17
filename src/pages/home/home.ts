import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash=true;

  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Skip";

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }


  skip() {
    this.navCtrl.push(LoginPage);
  }

  slideChanged() {
    if (this.slides.isEnd())
      this.skipMsg = "Alright, I got it";
    else
      this.skipMsg="Skip";
  }


}
