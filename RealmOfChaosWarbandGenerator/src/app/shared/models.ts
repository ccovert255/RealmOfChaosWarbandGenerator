import { ChaosPatron, Race, SpellTpe } from '../shared/enums';

export class Warband {
  name: string = "Name";
  seed: string = "";
  champion: Champion = new Champion();
}

export class Champion {
  name: string = "Name";
  chaosPatron: ChaosPatron = ChaosPatron.Undivided;
  race: Race = Race.Human;
  profile: Profile = new Profile();
  equipmentPoints: number = 0;
  seed: string = "";
  weapons: Weapon[] = [];
  armor: Armor[] = [];
  attributes: ChaosAttribute[] = [];
  rewards: ChaosReward[] = [];

  chaosPatronDisplayName() {
    return ChaosPatron[this.chaosPatron];
  }
  raceDisplayName() {
    return Race[this.race];
  }
  rewardToAttributeRatio() {
    return `${this.rewards.length}\\${this.attributes.length}`;
  }

  fearPoints() {
    let fearPoints = 0;
    this.attributes.forEach(a => fearPoints += a.fearPoints);
    return fearPoints;
  }

  profileWithBonuses() {
    let bonusProfile = new Profile();
    bonusProfile.movement = this.profile.movement;
    bonusProfile.weaponSkill = this.profile.weaponSkill;
    bonusProfile.ballisticSkill = this.profile.ballisticSkill;
    bonusProfile.strength = this.profile.strength;
    bonusProfile.toughness = this.profile.toughness;
    bonusProfile.wounds = this.profile.wounds;
    bonusProfile.initiative = this.profile.initiative;
    bonusProfile.attacks = this.profile.attacks;
    bonusProfile.leadership = this.profile.leadership;
    bonusProfile.cool = this.profile.cool;
    bonusProfile.intelligence = this.profile.intelligence;
    bonusProfile.willPower = this.profile.willPower;

    this.rewards.forEach(function (r) {
      bonusProfile.movement += r.profileBonus.movement;
      bonusProfile.weaponSkill += r.profileBonus.weaponSkill;
      bonusProfile.ballisticSkill += r.profileBonus.ballisticSkill;
      bonusProfile.strength += r.profileBonus.strength;
      bonusProfile.toughness += r.profileBonus.toughness;
      bonusProfile.wounds += r.profileBonus.wounds;
      bonusProfile.initiative += r.profileBonus.initiative;
      bonusProfile.attacks += r.profileBonus.attacks;
      bonusProfile.leadership += r.profileBonus.leadership;
      bonusProfile.cool += r.profileBonus.cool;
      bonusProfile.intelligence += r.profileBonus.intelligence;
      bonusProfile.willPower += r.profileBonus.willPower;
    });
    return bonusProfile;
  }

}

export class Profile {
  rollNumber: number = 0;
  description: string = "Human"
  heroLevel: number = 0;
  wizardLevel: number = 0;
  movement: number = 4;
  weaponSkill: number = 3;
  ballisticSkill: number = 3;
  strength: number = 3;
  toughness: number = 3;
  wounds: number = 1;
  initiative: number = 3;
  attacks: number = 1;
  leadership: number = 7;
  intelligence: number = 7;
  cool: number = 7;
  willPower: number = 7;
}

export class Weapon {
  name: string = "Hand weapon";
  strengthBonus: number = 0;
  attackBonus: number = 0;
  armorSaveModifier: number = 0;
  range: number = 0;
  cost: number = 1;
}

export class Armor {
  name: string = "Hand weapon";
  movementModifier: number = 0;
  armorSaveModifier: number = 0;
}

export class ChaosAttribute {
  name: string = "";
  rollNumber: number = 5;
  description: string = "";
  fearPoints: number = 0;
}

export class ChaosReward {
  name: string = "";
  rollNumber: number = 43;
  description: string = "";
  specialRules: RuleDescription[] = [];
  profileBonus: ProfileBonus = new ProfileBonus();
}

export class RuleDescription {
  id: number = 0;
  name: string = "";
  description: string = "";
}

export class ProfileBonus {
  movement: number = 0;
  weaponSkill: number = 0;
  ballisticSkill: number = 0;
  strength: number = 0;
  toughness: number = 0;
  wounds: number = 0;
  initiative: number = 0;
  attacks: number = 0;
  leadership: number = 0;
  intelligence: number = 0;
  cool: number = 0;
  willPower: number = 0;
}

export class Spell {
  id: number = 1;
  level: number = 1;
  SpellTpe: SpellTpe = 1;
  magicPoints: number = 1;
  range: number = 0;
  description: string = "";
}




