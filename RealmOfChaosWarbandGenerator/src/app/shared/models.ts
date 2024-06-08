import { ChaosPatron, Race, SpellTpe } from '../shared/enums';
import { Guid } from 'guid-typescript';

export class Warband {
  id: Guid = Guid.create();
  name: string = "Name";
  seed: string = "";
  champion: Champion = new Champion();

  copyValues(warband: Warband) {
    this.id = warband.id;
    this.name = warband.name;
    this.seed = warband.seed;

    this.champion.copyValues(warband.champion);
  }
}

export class Champion {
  name: string = "Name";
  chaosPatron: ChaosPatron = ChaosPatron.Undivided;
  race: Race = Race.Human;
  profile: Profile = new Profile();
  equipmentPoints: number = 0;
  weapons: Weapon[] = [];
  armor: Armor[] = [];
  attributes: ChaosAttribute[] = [];
  rewards: ChaosReward[] = [];

  refusedRewards: ChaosReward[] = [];

  //TODO: track flight profiles
  //TODO: track spells
  //TODO: track Claw, Tail, Gore, Bite attacks and attack facings
  //TODO: track number of Legs, Arms, and Heads

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

  profileStatBonus(stat: string): number {
    let bonus = 0;
    switch (stat) {
      case ("M"):
        this.rewards.forEach(function (r) {
          bonus += r.profileBonus.movement;
        });

        this.attributes.forEach(function (r) {
          bonus += r.profileBonus.movement;
        });
        break;
      case ("WS"):
        this.rewards.forEach(function (r) {
          bonus += r.profileBonus.weaponSkill;
        });

        this.attributes.forEach(function (r) {
          bonus += r.profileBonus.weaponSkill;
        });
        break;
      case ("BS"):
        this.rewards.forEach(function (r) {
          bonus += r.profileBonus.ballisticSkill;
        });

        this.attributes.forEach(function (r) {
          bonus += r.profileBonus.ballisticSkill;
        });
        break;
      case ("S"):
        this.rewards.forEach(function (r) {
          bonus += r.profileBonus.strength;
        });

        this.attributes.forEach(function (r) {
          bonus += r.profileBonus.strength;
        });
        break;
      case ("T"):
        this.rewards.forEach(function (r) {
          bonus += r.profileBonus.toughness;
        });

        this.attributes.forEach(function (r) {
          bonus += r.profileBonus.toughness;
        });
        break;
      case ("W"):
        this.rewards.forEach(function (r) {
          bonus += r.profileBonus.wounds;
        });

        this.attributes.forEach(function (r) {
          bonus += r.profileBonus.wounds;
        });
        break;
      case ("I"):
        this.rewards.forEach(function (r) {
          bonus += r.profileBonus.initiative;
        });

        this.attributes.forEach(function (r) {
          bonus += r.profileBonus.initiative;
        });
        break;
      case ("A"):
        this.rewards.forEach(function (r) {
          bonus += r.profileBonus.attacks;
        });

        this.attributes.forEach(function (r) {
          bonus += r.profileBonus.attacks;
        });
        break;
      case ("Ld"):
        this.rewards.forEach(function (r) {
          bonus += r.profileBonus.leadership;
        });

        this.attributes.forEach(function (r) {
          bonus += r.profileBonus.leadership;
        });
        break;
      case ("Int"):
        this.rewards.forEach(function (r) {
          bonus += r.profileBonus.intelligence;
        });

        this.attributes.forEach(function (r) {
          bonus += r.profileBonus.intelligence;
        });
        break;
      case ("Cl"):
        this.rewards.forEach(function (r) {
          bonus += r.profileBonus.cool;
        });

        this.attributes.forEach(function (r) {
          bonus += r.profileBonus.cool;
        });
        break;
      case ("Wp"):
        this.rewards.forEach(function (r) {
          bonus += r.profileBonus.willPower;
        });

        this.attributes.forEach(function (r) {
          bonus += r.profileBonus.willPower;
        });
        break;
    }
    return bonus;
  }

  profileStatHasBonus(stat: string): boolean {
    let bonus = this.profileStatBonus(stat);
    if (bonus == 0) {
      return false;
    }
    else { return true; }
  }

  profileWithBonuses() {
    let bonusProfile = new Profile();
    bonusProfile.description = this.profile.description;
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

    this.attributes.forEach(function (r) {
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

  copyValues(champion: Champion) {
    this.name = champion.name;
    this.chaosPatron = champion.chaosPatron as ChaosPatron;
    this.race = champion.race as Race;
    this.equipmentPoints = champion.equipmentPoints;

    this.profile = champion.profile as Profile;

    this.weapons = champion.weapons as Weapon[];
    this.armor = champion.armor as Armor[];
    this.attributes = champion.attributes as ChaosAttribute[];
    this.rewards = champion.rewards as ChaosReward[]; 
    this.refusedRewards = champion.refusedRewards as ChaosReward[];
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

  //public copyValues(profile: Profile) {
  //  this.description = profile.description;
  //  this.movement = profile.movement;
  //  this.weaponSkill = profile.weaponSkill;
  //  this.ballisticSkill = profile.ballisticSkill;
  //  this.strength = profile.strength;
  //  this.toughness = profile.toughness;
  //  this.wounds = profile.wounds;
  //  this.initiative = profile.initiative;
  //  this.attacks = profile.attacks;
  //  this.leadership = profile.leadership;
  //  this.cool = profile.cool;
  //  this.intelligence = profile.intelligence;
  //  this.willPower = profile.willPower;
  //}
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
  profileBonus: ProfileBonus = new ProfileBonus();
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

export class WizardProfile {
  magicLevel: number = 1;
  powerLevel: number = 10;
  spells: Spell[] = [];
  constructor(magicLevel: number) {
    this.magicLevel = magicLevel;
    this.powerLevel = magicLevel * 10;
  }
}

export class Spell {
  id: number = 1;
  level: number = 1;
  SpellTpe: SpellTpe = 1;
  magicPoints: number = 1;
  range: number = 0;
  description: string = "";
}

export class FlightProfile {
  minSpeed: number = 0;
  maxSpeed: number = 0;
  accDec: number = 0;
}




