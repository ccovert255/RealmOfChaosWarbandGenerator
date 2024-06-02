import { Injectable } from '@angular/core';
import { Champion, Profile, Weapon, Armor, ChaosAttribute, Warband } from './shared/models';
import { getRandomIntInclusive } from './shared/functions';
import { DARKELF_PROFILES, DWARF_PROFILES, HUMAN_PROFILES, OTHER_PROFILES, PERSONAL_ATTRIBUTES } from './shared/constants';
import { ChaosPatron, Race } from './shared/enums';

@Injectable({
  providedIn: 'root'
})
export class WarbandService {

  constructor() { }

  createWarband(request: CreateWarbandRequest): Warband {
    let result: Warband = new Warband();

    result.name = request.championName;
    result.seed = request.seed;
    result.champion = new Champion();
    result.champion.chaosPatron = request.chaosPatron;

    result.champion.race = getRandomRace(request.seed);
    result.champion.profile = getStartingProfile(request.seed, request.race);

    result.champion.equipmentPoints = getRandomIntInclusive(1, 6, `${request.seed}-equipRoll1`);
    result.champion.equipmentPoints += result.champion.profile.heroLevel;

    let firstAttribute = getRandomAttribute(request.seed);
    result.champion.attributes.push(firstAttribute);

    applyMarkOfChaos(request.seed, result.champion);

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

function getStartingProfile(seed: string, race: Race): Profile {

  //TODO: let users cap min/max hero levels...
  let profileRoll1 = getRandomIntInclusive(1, 100, `${seed}-profileRoll1`);

  switch (race) {
    case Race.WereMan:
    case Race.Human: {
      for (var i = 0; i < HUMAN_PROFILES.length; i++) {
        if (HUMAN_PROFILES[i].rollNumber <= profileRoll1) {
          return HUMAN_PROFILES[i];
        }
      }
      return HUMAN_PROFILES[0];
    }
    case Race.Dwarf: {
      for (var i = 0; i < DWARF_PROFILES.length; i++) {
        if (DWARF_PROFILES[i].rollNumber <= profileRoll1) {
          return DWARF_PROFILES[i];
        }
      }
      return DWARF_PROFILES[0];
    }
    case Race.DarkElf: {
      for (var i = 0; i < DARKELF_PROFILES.length; i++) {
        if (DARKELF_PROFILES[i].rollNumber <= profileRoll1) {
          return DARKELF_PROFILES[i];
        }
      }
      return DARKELF_PROFILES[0]
    }
    case Race.Beastman: {
      return OTHER_PROFILES[0];
    }
    case Race.Centaur: {
      return OTHER_PROFILES[1];
    }
    case Race.Fimir_Fimmaur: {
      return OTHER_PROFILES[2];
    }
    case Race.Fimir_Shearl: {
      return OTHER_PROFILES[3];
    }
    case Race.Goblin: {
      return OTHER_PROFILES[4];
    }
    case Race.DragonOgre: {
      return OTHER_PROFILES[5];
    }
    case Race.Hobgoblin: {
      return OTHER_PROFILES[6];
    }
    case Race.Lizardman: {
      return OTHER_PROFILES[7];
    }
    case Race.Minotaur: {
      return OTHER_PROFILES[8];
    }
    case Race.Orc: {
      return OTHER_PROFILES[9];
    }
    case Race.Skaven: {
      return OTHER_PROFILES[10];
    }
    case Race.Slann: {
      return OTHER_PROFILES[11];
    }
    case Race.Zoat: {
      return OTHER_PROFILES[12];
    }
  }
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

function applyMarkOfChaos(seed: string, champion:Champion) {

    //TODO: apply mark of chaos...

}

export class CreateWarbandRequest {
  championName: string = "";
  chaosPatron: ChaosPatron = ChaosPatron.Undivided;
  race: Race = Race.Human;
  seed: string = "";
}
