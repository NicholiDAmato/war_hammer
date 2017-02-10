import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UnitListPage } from '../../pages/unit-list/unit-list';
import { Unit, UnitService } from '../../providers/unit-service';

/*
  Generated class for the UnitCreate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-unit-create',
  templateUrl: 'unit-create.html'
})
export class UnitCreatePage {
  unit: Unit;

  constructor(public navCtrl: NavController, public navParams: NavParams, private unitService: UnitService) {
    this.unit = new Unit('', 0, 0, 0, 0, 0, 0, 0, '');
  }

  ionViewDidLoad() {
  }

  create() {
    this.unitService.addUnit(this.unit)
      .then(() => {
        this.navCtrl.parent.select(0);
      });
  }
}
