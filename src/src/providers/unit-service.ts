import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Unit provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UnitService {
    units: Unit[] = [
        new Unit('Cultists', 'Chaos Cultist', 'Infantry', 3, 3, 3, 1, 1, 7, 6, 'None'),
        new Unit('Cultists', 'Cultist Champion', 'Infantry', 3, 3, 3, 1, 1, 8, 6, 'Champion of Chaos'),
        new Unit('Chosen', 'Chosen', 'Infantry', 4, 4, 4, 2, 1, 8, 3, 'None'),
        new Unit('Chosen', 'Chosen Champion', 'Infantry', 3, 3, 3, 1, 1, 9, 3, 'Champion of Chaos'),
    ];
    similarUnits: Unit[] = [];

  constructor(public http: Http) {
  }

  getUnits() {
    return new Promise<Unit[]>(resolve => {
      resolve(this.units);
    });
  }

  getSimilar() {
      return new Promise<Unit[]>(resolve => {

          resolve(this.similarUnits);
      });
  }

  addUnit(unit: Unit) {
    return new Promise(resolve => {
      this.units.push(unit);
      resolve();
    });
  }
}

export class Unit {
    constructor(
      public squad: string,
      public name: string,
      public type: string,
    public bs: number,
    public ws: number,
    public i: number,
    public a: number,
    public w: number,
    public ld: number,
    public sv: number,
    public specialRules: string,
  ) {
  }
}
