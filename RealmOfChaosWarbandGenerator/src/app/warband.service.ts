import { Injectable } from '@angular/core';
import { Profile, Weapon, Armor, ChaosAttribute, Warband } from './shared/models';
import { getRandomIntInclusive } from './shared/functions';
import { PERSONAL_ATTRIBUTES } from './shared/constants';
import { ChaosGod } from './shared/enums';

@Injectable({
  providedIn: 'root'
})
export class WarbandService {

  constructor() { }

  createWarband(request: CreateWarbandRequest): Warband {
    let result: Warband = new Warband();

    result.championName = request.championName;
    result.seed = request.seed;
    result.chaosGod = request.chaosGod;

    result.equipmentPoints = getRandomIntInclusive(1,6, request.seed);

    let firstAttribute = getRandomAttribute(request.seed);
    result.profile.attributes.push(firstAttribute);
    return result;
  }
}

function getRandomAttribute(seed:string):ChaosAttribute {

  var rand = getRandomIntInclusive(1, 1000, seed);

  for (var i = 0; i < PERSONAL_ATTRIBUTES.length; i++) {
    if (PERSONAL_ATTRIBUTES[i].rollNumber < rand) {
      return PERSONAL_ATTRIBUTES[i];
    }
  }

  return PERSONAL_ATTRIBUTES[PERSONAL_ATTRIBUTES.length -1];
}

export class CreateWarbandRequest {
  championName: string = "";
  chaosGod: ChaosGod = ChaosGod.Undivided;
  seed: string = "";
}
