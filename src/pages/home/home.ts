import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  authentication: string = 'login';

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){
    this.navCtrl.push( DashboardPage )
  }

}
