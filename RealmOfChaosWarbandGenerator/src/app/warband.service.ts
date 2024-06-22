import { Injectable } from '@angular/core';
import { Champion, Profile, Weapon, Armor, ChaosAttribute, Warband, ChaosReward } from './shared/models';
import { getRandomIntInclusive } from './shared/functions';
import { HERO_BONUS_PROFILES, DARKELF_PROFILES, DWARF_PROFILES, HUMAN_PROFILES, MARK_OF_KHORNE, MARK_OF_NURGLE, MARK_OF_SLAANESH, MARK_OF_TZEENTCH, OTHER_PROFILES, PERSONAL_ATTRIBUTES, STANDARD_REWARDS } from './shared/constants';
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
    result.champion.name = request.championName;
    result.champion.chaosPatron = request.chaosPatron;

    result.champion.race = getRandomRace(request.seed);
    applyStartingProfile(request.seed, result.champion);

    result.champion.equipmentPoints = getRandomIntInclusive(1, 6, `${request.seed}-equipRoll1`);
    result.champion.equipmentPoints += result.champion.profile.heroLevel;

    applyMarkOfChaos(request.seed, result.champion);

    console.log(result.champion);
    return result;
  }
}

function applyInitalAttribute(seed: string, rollName: string, champion: Champion) {

  var rand = getRandomIntInclusive(1, 1000, `${seed}-${rollName}`);
  var attribute = getChaosAttribute(rand);

  //re-roll invalid intial attribute rolls like Chaos Spawn or Mindeless
  let reroll = 0;
  while (attribute.name == "Chaos Spawn" || attribute.name == "Mindless") {
    console.log(`Rolled ${rand} for "Chaos Spawn" or "Mindless". Re-rolling...`);
    rand = getRandomIntInclusive(1, 1000, `${seed}-${rollName}-${reroll}`);
    attribute = getChaosAttribute(rand);
  }

  //handle custom attributes the need further rolls
  if (attribute.name == "Atrophy") {
    //TODO: roll for affected areas and calc stat losses
  }
  //TODO: handle all the other custom attributes

  champion.attributes.push(attribute);
  console.log(`Rolled ${rand} for attribute: ${attribute.name}`);
  return;
}

function applyRandomReward(seed: string, rollName: string, champion: Champion) {

  //TODO: allow user to refuse standard reward and take patron gift instead

  var rand = getRandomIntInclusive(1, 100, `${seed}-${rollName}`);
  if (rand < 41) {
    console.log(`Rolled ${rand} for reward: Chaos Attribute`);
    applyInitalAttribute(seed, `${seed}-${rollName}-attribute`, champion);
    return;
  }

  let reward = getStandardReward(rand);
  console.log(`Rolled ${rand} for reward: ${reward.name}`);

  //check for re-roll conditions
  if (reward.name == "Gift of the Gods" && champion.chaosPatron == ChaosPatron.Undivided) {

    rand = getRandomIntInclusive(1, 100, `${seed}-${rollName}-2`);
    console.log(`Re-rolling Gift of the Gods for Undivided Champion, rolled ${rand}`);
    if (rand < 41) {
      applyInitalAttribute(seed, `${seed}-${rollName}-attribute`, champion);
      return;
    }

    reward = getStandardReward(rand);
    if (reward.name == "Gift of the Gods") {
      //second dupe results in chaos attribute
      console.log(`Gift of the Gods rolled again, applying Chaos Attribute...`);
      applyInitalAttribute(seed, `${seed}-${rollName}-attribute`, champion);
      return;
    }
  }

  champion.rewards.push(reward);
  return;
}

function applyMarkOfChaos(seed: string, champion: Champion) {

  applyInitalAttribute(seed, `${seed}-attribute1`, champion);

  switch (+champion.chaosPatron) {
    case ChaosPatron.Khorne:
      champion.rewards.push(MARK_OF_KHORNE);
      champion.armor.push({ armorSaveModifier: +3, name: "Chaos Armor", movementModifier: 0 });
      break;
    case ChaosPatron.Slaanesh:
      champion.rewards.push(MARK_OF_SLAANESH);
      break;
    case ChaosPatron.Nurgle:
      champion.rewards.push(MARK_OF_NURGLE);
      break;
    case ChaosPatron.Tzeentch:
      champion.rewards.push(MARK_OF_TZEENTCH);

      var tzeentchRoll = getRandomIntInclusive(1, 3, `${seed}-tzeentchRoll1`);
      if (tzeentchRoll > 1) {
        applyInitalAttribute(seed, `${seed}-attribute2`, champion);
      }
      if (tzeentchRoll > 2) {
        applyInitalAttribute(seed, `${seed}-attribute3`, champion);
      }

      //add magic item

      break;
    default:
      applyRandomReward(seed, 'reward1', champion);

  }

}

function getRandomRace(seed: string): Race {

  let raceRoll1 = getRandomIntInclusive(1, 100, `${seed}-raceRoll1`);
  console.log(`rolled ${raceRoll1} for race`);
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
  console.log(`rolled ${raceRoll2} for race`);
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

function applyStartingProfile(seed: string, champion: Champion): void {

  //TODO: let users cap min/max hero levels...
  let profileRoll1 = getRandomIntInclusive(1, 100, `${seed}-profileRoll1`);
  console.log(`rolled ${profileRoll1} for profile`);

  switch (champion.race) {
    case Race.WereMan:
    case Race.Human: {
      champion.profile = HUMAN_PROFILES[0];
      for (var i = 0; i < HUMAN_PROFILES.length; i++) {
        if (profileRoll1 <= HUMAN_PROFILES[i].rollNumber) {
          champion.profile.heroLevel = HUMAN_PROFILES[i].heroLevel;
          champion.profile.wizardLevel = HUMAN_PROFILES[i].wizardLevel;
          break;
        }
      }
      break;
    }
    case Race.Dwarf: {
      champion.profile = DWARF_PROFILES[0];
      for (var i = 0; i < DWARF_PROFILES.length; i++) {
        if (profileRoll1 <= DWARF_PROFILES[i].rollNumber) {
          champion.profile.heroLevel = DWARF_PROFILES[i].heroLevel;
          champion.profile.wizardLevel = DWARF_PROFILES[i].wizardLevel;
          break;
        }
      }
      break;
    }
    case Race.DarkElf: {
      champion.profile = DARKELF_PROFILES[0];
      for (var i = 0; i < DARKELF_PROFILES.length; i++) {
        if (profileRoll1 <= DARKELF_PROFILES[i].rollNumber) {
          champion.profile.heroLevel = DARKELF_PROFILES[i].heroLevel;
          champion.profile.wizardLevel = DARKELF_PROFILES[i].wizardLevel;
          break;
        }
      }
      break;
    }
    case Race.Beastman: {
      champion.profile = OTHER_PROFILES[0];
      break;
    }
    case Race.Centaur: {
      champion.profile = OTHER_PROFILES[1];
      break;
    }
    case Race.Fimir_Fimmaur: {
      champion.profile = OTHER_PROFILES[2];
      break;
    }
    case Race.Fimir_Shearl: {
      champion.profile = OTHER_PROFILES[3];
      break;
    }
    case Race.Goblin: {
      champion.profile = OTHER_PROFILES[4];
      break;
    }
    case Race.DragonOgre: {
      champion.profile = OTHER_PROFILES[5];
      break;
    }
    case Race.Hobgoblin: {
      champion.profile = OTHER_PROFILES[6];
      break;
    }
    case Race.Lizardman: {
      champion.profile = OTHER_PROFILES[7];
      break;
    }
    case Race.Minotaur: {
      champion.profile = OTHER_PROFILES[8];
      break;
    }
    case Race.Orc: {
      champion.profile = OTHER_PROFILES[9];
      break;
    }
    case Race.Skaven: {
      champion.profile = OTHER_PROFILES[10];
      break;
    }
    case Race.Slann: {
      champion.profile = OTHER_PROFILES[11];
      break;
    }
    case Race.Zoat: {
      champion.profile = OTHER_PROFILES[12];
      break;
    }
  }

  //TODO: fix broken filter here
  champion.characterBonus = HERO_BONUS_PROFILES[0];
  if (champion.profile.heroLevel > 0) {
    let heroProfile = HERO_BONUS_PROFILES.filter(b => b.heroLevel === champion.profile.heroLevel);
    console.log(`hero level: ${champion.profile.heroLevel}`);
    console.log(heroProfile);
    if (heroProfile.length > 0)
      champion.characterBonus = heroProfile[0];
  }

  if (champion.profile.wizardLevel > 0) {
    let wizardProfile = HERO_BONUS_PROFILES.filter(b => b.wizardLevel === champion.profile.wizardLevel);
    console.log(`wizard level: ${champion.profile.heroLevel}`);
    console.log(wizardProfile);
    if (wizardProfile.length > 0)
      champion.characterBonus = wizardProfile[0];
  }



}

function getChaosAttribute(rollNumber: number): ChaosAttribute {
  for (var i = 0; i < PERSONAL_ATTRIBUTES.length; i++) {
    if (rollNumber <= PERSONAL_ATTRIBUTES[i].rollNumber) {
      return PERSONAL_ATTRIBUTES[i];
    }
  }
  return PERSONAL_ATTRIBUTES[PERSONAL_ATTRIBUTES.length - 1];
}

function getStandardReward(rollNumber: number): ChaosReward {
  for (var i = 0; i < STANDARD_REWARDS.length; i++) {
    if (rollNumber <= STANDARD_REWARDS[i].rollNumber) {
      return STANDARD_REWARDS[i];
    }
  }
  return STANDARD_REWARDS[STANDARD_REWARDS.length - 1];
}

export class CreateWarbandRequest {
  championName: string = "";
  chaosPatron: ChaosPatron = ChaosPatron.Undivided;
  race: Race = Race.Human;
  seed: string = "";
}
