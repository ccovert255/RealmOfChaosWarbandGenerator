import { Injectable } from '@angular/core';
import { Profile, Weapon, Armor, ChaosAttribute, Warband } from './shared/models';
import { getRandomIntInclusive } from './shared/functions';
import { HUMAN_PROFILES, PERSONAL_ATTRIBUTES } from './shared/constants';
import { ChaosPatron, Race } from './shared/enums';

@Injectable({
  providedIn: 'root'
})
export class WarbandService {

  constructor() { }

  createWarband(request: CreateWarbandRequest): Warband {
    let result: Warband = new Warband();

    result.championName = request.championName;
    result.seed = request.seed;
    result.chaosPatron = request.chaosPatron;

    result.race = getRandomRace(request.seed);
    result.profile = getStartingProfile(request.seed, result.race);

    //todo: include extra points based on hero level...
    result.equipmentPoints = getRandomIntInclusive(1, 6, `${request.seed}-equipRoll1`);
    

    //let firstAttribute = getRandomAttribute(request.seed);
    //result.profile.attributes.push(firstAttribute);
    return result;
  }
}

function getRandomRace(seed: string): Race {

  let raceRoll1 = getRandomIntInclusive(1, 100, `${seed}-raceRoll1`);

  if (raceRoll1 <= 20) {
    return Race.Dwarf;
  }

  if (raceRoll1 <= 35) {
    return Race.DarkElf;
  }

  if (raceRoll1 <= 95) {
    return Race.Human;
  }

  let raceRoll2 = getRandomIntInclusive(1, 100, `${seed}-raceRoll2`);
  if (raceRoll1 <= 15) {
    return Race.Beastman;
  }
  if (raceRoll1 <= 21) {
    return Race.Centaur;
  }
  if (raceRoll1 <= 24) {
    return Race.Fimir_Fimmaur;
  }
  if (raceRoll1 <= 27) {
    return Race.Fimir_Shearl;
  }
  if (raceRoll1 <= 35) {
    return Race.Goblin;
  }
  if (raceRoll1 <= 41) {
    return Race.DragonOgre;
  }
  if (raceRoll1 <= 47) {
    return Race.Hobgoblin;
  }
  if (raceRoll1 <= 55) {
    return Race.WereMan;
  }
  if (raceRoll1 <= 59) {
    return Race.Lizardman;
  }
  if (raceRoll1 <= 68) {
    return Race.Minotaur;
  }
  if (raceRoll1 <= 80) {
    return Race.Orc;
  }
  if (raceRoll1 <= 93) {
    return Race.Skaven;
  }
  if (raceRoll1 <= 96) {
    return Race.Slann;
  }

  return Race.Zoat;
}

function getStartingProfile(seed: string, race: Race):Profile {


  let profileRoll1 = getRandomIntInclusive(1, 100, `${seed}-profileRoll1`);

  //TODO: let users cap min/max hero levels...

  if (race == Race.Human) {
    for (var i = 0; i < PERSONAL_ATTRIBUTES.length; i++) {
      if (HUMAN_PROFILES[i].rollNumber <= profileRoll1) {
        return HUMAN_PROFILES[i];
      }
    }
  }



  return HUMAN_PROFILES[0];
}

function getRandomAttribute(seed:string):ChaosAttribute {

  var rand = getRandomIntInclusive(1, 1000, `${seed}-attributeRoll1`);

  for (var i = 0; i < PERSONAL_ATTRIBUTES.length; i++) {
    if (PERSONAL_ATTRIBUTES[i].rollNumber <= rand) {
      return PERSONAL_ATTRIBUTES[i];
    }
  }

  return PERSONAL_ATTRIBUTES[PERSONAL_ATTRIBUTES.length -1];
}





export class CreateWarbandRequest {
  championName: string = "";
  chaosPatron: ChaosPatron = ChaosPatron.Undivided;
  race: Race = Race.Human;
  seed: string = "";
}
