import { ChaosGod } from '../shared/enums';

export class Warband {
  championName: string = "";
  chaosGod: ChaosGod = ChaosGod.Undivided;
  profile: Profile = new Profile();
  equipmentPoints: number = 0;
  seed: string = "";
}

export class Profile {
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
  weapons: Weapon[] = [];
  armor: Armor[] = []
  heroLevel: number = 0;
  attributes: ChaosAttribute[] = [];
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
  name: string = "Acid Excretion";
  rollNumber: number = 5;
  fearPoints: number = 0;
}




