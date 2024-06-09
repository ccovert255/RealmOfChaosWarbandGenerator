import { Injectable } from '@angular/core';
import { Warband, Champion, Profile, Weapon, Armor, ChaosAttribute } from './shared/models';
import { Guid } from 'guid-typescript';

const WARBANDS_LIST_KEY: string = "warbands-list";

@Injectable({
  providedIn: 'root'
})

export class WarbandsListService {

  constructor() { }

  getWarbands(): Warband[] {

    let warbandsList: Warband[] = [];
    let warbandListJson = localStorage.getItem(WARBANDS_LIST_KEY);

    if (warbandListJson != null) {
      try {
        let warbandListData = JSON.parse(warbandListJson);

        warbandListData.forEach((json: any) => {
          let castedWarband = json as Warband;
          let warband = new Warband();
          warband.copyValues(castedWarband);
          warbandsList.push(warband);
        });

      } catch (e) {
      }
    }

    return warbandsList;
  }

  getWarband(id: Guid): Warband | void {

    let warbandsList = this.getWarbands();

    for (let warband of warbandsList) {
      if (warband.id.toString() == id.toString()) {
        return warband;
      }
      console.log(`${warband.id.toString()} != ${id.toString() }`);
    }
    return;
  }

  addWarband(saveRequest: Warband): void {
    let warbandsList = this.getWarbands();
    warbandsList.push(saveRequest);
    localStorage.setItem(WARBANDS_LIST_KEY, JSON.stringify(warbandsList));
  }

  saveWarband(saveRequest: Warband): void {
    let warbandsList = this.getWarbands();

    warbandsList.forEach(warband => {
      if (warband.id.toString() == saveRequest.id.toString())
        warband.copyValues(saveRequest);
    });

    localStorage.setItem(WARBANDS_LIST_KEY, JSON.stringify(warbandsList));
  }

  deleteWarband(id: Guid): void {
    let warbandsList = this.getWarbands();

    warbandsList.forEach((warband, index) => {
      if (warband.id.toString() == id.toString())
        warbandsList.splice(index, 1);
    });

    localStorage.setItem(WARBANDS_LIST_KEY, JSON.stringify(warbandsList));
  }
}
