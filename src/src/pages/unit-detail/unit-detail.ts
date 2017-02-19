import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Injectable, Pipe} from 'angular2/core';
import { UnitService, Unit } from '../../providers/unit-service';

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
    
    units: Unit[] = [];
    selectedUnit: Unit;

    constructor(public navCtrl: NavController, public navParams: NavParams, private unitService: UnitService) {
        this.selectedUnit = navParams.get('unit');

  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad UnitDetailPage');
          this.unitService.getUnits()
              .then(units => this.units = units);
      
  }
  //selectedUnits(units) {
  //    return this.units.filter((selectedUnit) => {
  //        if (selectedUnit.squad == units.squad) {
  //            return true;
  //        }
  //        return false;
  //    })
  //}

  
}
