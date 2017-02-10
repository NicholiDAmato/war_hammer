import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Unit } from '../../providers/unit-service';

/*
  Generated class for the UnitDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-unit-detail',
  templateUrl: 'unit-detail.html'
})
export class UnitDetailPage {
  unit: Unit;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.unit = navParams.get('unit');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitDetailPage');
  }

}
