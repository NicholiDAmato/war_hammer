import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UnitService, Unit } from '../../providers/unit-service';
import { UnitDetailPage } from '../unit-detail/unit-detail';

/*
  Generated class for the UnitList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-unit-list',
  templateUrl: 'unit-list.html'
})
export class UnitListPage {
  units: Unit[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private unitService: UnitService) {
  }

  ionViewDidLoad() {
    this.unitService.getUnits()
      .then(units => this.units = units);
  }

  showDetail(unit: Unit) {
    this.navCtrl.push(UnitDetailPage, { unit: unit });
  }

}
