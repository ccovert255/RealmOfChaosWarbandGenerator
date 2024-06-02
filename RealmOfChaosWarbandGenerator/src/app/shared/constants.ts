import { ChaosAttribute, Profile } from "./models";

export const PERSONAL_ATTRIBUTES: ChaosAttribute[] = [
  { "rollNumber": 5, "name": "Available", fearPoints: 0 },
  { "rollNumber": 5, "name": "Available", fearPoints: 0 },
  { "rollNumber": 5, "name": "Available", fearPoints: 0 },
  { "rollNumber": 5, "name": "Available", fearPoints: 0 },
  { "rollNumber": 5, "name": "Available", fearPoints: 0 },
  { "rollNumber": 5, "name": "Available", fearPoints: 0 },
  { "rollNumber": 5, "name": "Available", fearPoints: 0 },
  { "rollNumber": 5, "name": "Available", fearPoints: 0 },
  { "rollNumber": 5, "name": "Available", fearPoints: 0 },
];

export const HUMAN_PROFILES: Profile[] = [
  {
    rollNumber: 35, heroLevel: 0, wizardLevel: 0, description: "Human",
    movement: 4, weaponSkill: 3, ballisticSkill: 3, strength: 3, toughness: 3, wounds: 1, initiative: 3, attacks: 1, leadership: 7, intelligence: 7, cool: 7, willPower: 7
  },
  {
    rollNumber: 50, heroLevel: 1, wizardLevel: 0, description: "Human 5 Hero",
    movement: 4, weaponSkill: 4, ballisticSkill: 4, strength: 4, toughness: 3, wounds: 1, initiative: 4, attacks: 2, leadership: 7, intelligence: 7, cool: 7, willPower: 7
  },
  {
    rollNumber: 60, heroLevel: 2, wizardLevel: 0, description: "Human 10 Hero",
    movement: 4, weaponSkill: 5, ballisticSkill: 4, strength: 4, toughness: 4, wounds: 2, initiative: 4, attacks: 3, leadership: 8, intelligence: 7, cool: 7, willPower: 7
  },
  {
    rollNumber: 65, heroLevel: 3, wizardLevel: 0, description: "Human 15 Hero",
    movement: 4, weaponSkill: 5, ballisticSkill: 4, strength: 4, toughness: 4, wounds: 3, initiative: 5, attacks: 3, leadership: 9, intelligence: 7, cool: 8, willPower: 8
  },
  {
    rollNumber: 67, heroLevel: 4, wizardLevel: 0, description: "Human 20 Hero",
    movement: 4, weaponSkill: 6, ballisticSkill: 4, strength: 4, toughness: 4, wounds: 4, initiative: 6, attacks: 4, leadership: 10, intelligence: 7, cool: 8, willPower: 8
  },
  {
    rollNumber: 68, heroLevel: 5, wizardLevel: 0, description: "Human 25 Hero",
    movement: 4, weaponSkill: 6, ballisticSkill: 5, strength: 4, toughness: 4, wounds: 4, initiative: 6, attacks: 4, leadership: 10, intelligence: 9, cool: 9, willPower: 9
  },
  {
    rollNumber: 83, heroLevel: 1, wizardLevel: 1, description: "Human 5 Wizard",
    movement: 4, weaponSkill: 4, ballisticSkill: 3, strength: 4, toughness: 3, wounds: 1, initiative: 3, attacks: 1, leadership: 7, intelligence: 8, cool: 8, willPower: 8
  },
  {
    rollNumber: 93, heroLevel: 2, wizardLevel: 1, description: "Human 10 Wizard",
    movement: 4, weaponSkill: 4, ballisticSkill: 3, strength: 4, toughness: 3, wounds: 2, initiative: 4, attacks: 1, leadership: 8, intelligence: 9, cool: 8, willPower: 9
  },
  {
    rollNumber: 98, heroLevel: 3, wizardLevel: 2, description: "Human 15 Wizard",
    movement: 4, weaponSkill: 5, ballisticSkill: 3, strength: 4, toughness: 4, wounds: 3, initiative: 4, attacks: 1, leadership: 9, intelligence: 9, cool: 9, willPower: 9
  },
  {
    rollNumber: 99, heroLevel: 4, wizardLevel: 3, description: "Human 20 Wizard",
    movement: 4, weaponSkill: 5, ballisticSkill: 4, strength: 4, toughness: 4, wounds: 4, initiative: 5, attacks: 1, leadership: 9, intelligence: 10, cool: 9, willPower: 10
  },
  {
    rollNumber: 100, heroLevel: 5, wizardLevel: 4, description: "Human 25 Wizard",
    movement: 4, weaponSkill: 6, ballisticSkill: 5, strength: 4, toughness: 4, wounds: 4, initiative: 6, attacks: 1, leadership: 10, intelligence: 10, cool: 10, willPower: 10
  },
];

export const DWARF_PROFILES: Profile[] = [
  {
    rollNumber: 35, heroLevel: 0, wizardLevel: 0, description: "Chaos Dwarf",
    movement: 3, weaponSkill: 4, ballisticSkill: 3, strength: 3, toughness: 4, wounds: 1, initiative: 2, attacks: 1, leadership: 9, intelligence: 7, cool: 9, willPower: 9
  },
  {
    rollNumber: 50, heroLevel: 1, wizardLevel: 0, description: "Dwarf 5 Hero",
    movement: 3, weaponSkill: 5, ballisticSkill: 4, strength: 4, toughness: 4, wounds: 1, initiative: 3, attacks: 2, leadership: 9, intelligence: 7, cool: 9, willPower: 9
  },
  {
    rollNumber: 55, heroLevel: 2, wizardLevel: 0, description: "Dwarf 10 Hero",
    movement: 3, weaponSkill: 6, ballisticSkill: 4, strength: 4, toughness: 5, wounds: 2, initiative: 3, attacks: 3, leadership: 10, intelligence: 7, cool: 9, willPower: 9
  },
  {
    rollNumber: 60, heroLevel: 3, wizardLevel: 0, description: "Dwarf 15 Hero",
    movement: 3, weaponSkill: 6, ballisticSkill: 4, strength: 4, toughness: 5, wounds: 3, initiative: 4, attacks: 3, leadership: 10, intelligence: 7, cool: 10, willPower: 10
  },
  {
    rollNumber: 62, heroLevel: 4, wizardLevel: 0, description: "Dwarf 20 Hero",
    movement: 3, weaponSkill: 7, ballisticSkill: 4, strength: 4, toughness: 5, wounds: 4, initiative: 5, attacks: 4, leadership: 10, intelligence: 7, cool: 10, willPower: 10
  },
  {
    rollNumber: 63, heroLevel: 5, wizardLevel: 0, description: "Dwarf 25 Hero",
    movement: 3, weaponSkill: 7, ballisticSkill: 5, strength: 4, toughness: 5, wounds: 4, initiative: 5, attacks: 4, leadership: 10, intelligence: 9, cool: 10, willPower: 10
  },
  {
    rollNumber: 78, heroLevel: 1, wizardLevel: 1, description: "Dwarf 5 Wizard",
    movement: 3, weaponSkill: 5, ballisticSkill: 3, strength: 4, toughness: 4, wounds: 1, initiative: 2, attacks: 1, leadership: 9, intelligence: 8, cool: 10, willPower: 10
  },
  {
    rollNumber: 88, heroLevel: 2, wizardLevel: 1, description: "Dwarf 10 Wizard",
    movement: 3, weaponSkill: 5, ballisticSkill: 3, strength: 4, toughness: 4, wounds: 2, initiative: 3, attacks: 1, leadership: 10, intelligence: 9, cool: 10, willPower: 10
  },
  {
    rollNumber: 93, heroLevel: 3, wizardLevel: 2, description: "Dwarf 15 Wizard",
    movement: 3, weaponSkill: 6, ballisticSkill: 3, strength: 4, toughness: 5, wounds: 3, initiative: 3, attacks: 1, leadership: 10, intelligence: 9, cool: 10, willPower: 10
  },
  {
    rollNumber: 98, heroLevel: 4, wizardLevel: 3, description: "Dwarf 20 Wizard",
    movement: 3, weaponSkill: 6, ballisticSkill: 4, strength: 4, toughness: 5, wounds: 4, initiative: 4, attacks: 1, leadership: 10, intelligence: 10, cool: 10, willPower: 10
  },
  {
    rollNumber: 100, heroLevel: 5, wizardLevel: 4, description: "Dwarf 25 Wizard",
    movement: 3, weaponSkill: 7, ballisticSkill: 5, strength: 4, toughness: 5, wounds: 4, initiative: 5, attacks: 1, leadership: 10, intelligence: 10, cool: 10, willPower: 10
  },
];

export const DARKELF_PROFILES: Profile[] = [
  {
    rollNumber: 30, heroLevel: 0, wizardLevel: 0, description: "Dark Elf",
    movement: 5, weaponSkill: 4, ballisticSkill: 4, strength: 3, toughness: 3, wounds: 1, initiative: 6, attacks: 1, leadership: 8, intelligence: 9, cool: 9, willPower: 8
  },
  {
    rollNumber: 50, heroLevel: 1, wizardLevel: 0, description: "Elf 5 Hero",
    movement: 5, weaponSkill: 5, ballisticSkill: 5, strength: 4, toughness: 3, wounds: 1, initiative: 7, attacks: 2, leadership: 8, intelligence: 9, cool: 9, willPower: 8
  },
  {
    rollNumber: 60, heroLevel: 2, wizardLevel: 0, description: "Elf 10 Hero",
    movement: 5, weaponSkill: 6, ballisticSkill: 5, strength: 4, toughness: 4, wounds: 2, initiative: 7, attacks: 3, leadership: 9, intelligence: 9, cool: 9, willPower: 8
  },
  {
    rollNumber: 63, heroLevel: 3, wizardLevel: 0, description: "Elf 15 Hero",
    movement: 5, weaponSkill: 6, ballisticSkill: 5, strength: 4, toughness: 4, wounds: 3, initiative: 8, attacks: 3, leadership: 10, intelligence: 9, cool: 10, willPower: 9
  },
  {
    rollNumber: 64, heroLevel: 4, wizardLevel: 0, description: "Elf 20 Hero",
    movement: 5, weaponSkill: 7, ballisticSkill: 5, strength: 4, toughness: 4, wounds: 4, initiative: 9, attacks: 4, leadership: 10, intelligence: 9, cool: 10, willPower: 9
  },
  {
    rollNumber: 65, heroLevel: 5, wizardLevel: 0, description: "Elf 25 Hero",
    movement: 5, weaponSkill: 7, ballisticSkill: 6, strength: 4, toughness: 4, wounds: 4, initiative: 9, attacks: 4, leadership: 10, intelligence: 10, cool: 10, willPower: 10
  },
  {
    rollNumber: 85, heroLevel: 1, wizardLevel: 1, description: "Elf 5 Wizard",
    movement: 5, weaponSkill: 5, ballisticSkill: 4, strength: 4, toughness: 3, wounds: 1, initiative: 6, attacks: 1, leadership: 8, intelligence: 10, cool: 10, willPower: 9
  },
  {
    rollNumber: 95, heroLevel: 2, wizardLevel: 1, description: "Elf 10 Wizard",
    movement: 5, weaponSkill: 5, ballisticSkill: 4, strength: 4, toughness: 3, wounds: 2, initiative: 7, attacks: 1, leadership: 9, intelligence: 10, cool: 10, willPower: 10
  },
  {
    rollNumber: 98, heroLevel: 3, wizardLevel: 2, description: "Elf 15 Wizard",
    movement: 5, weaponSkill: 6, ballisticSkill: 4, strength: 4, toughness: 4, wounds: 3, initiative: 7, attacks: 1, leadership: 10, intelligence: 10, cool: 10, willPower: 10
  },
  {
    rollNumber: 99, heroLevel: 4, wizardLevel: 3, description: "Elf 20 Wizard",
    movement: 5, weaponSkill: 6, ballisticSkill: 5, strength: 4, toughness: 4, wounds: 4, initiative: 8, attacks: 1, leadership: 10, intelligence: 10, cool: 10, willPower: 10
  },
  {
    rollNumber: 100, heroLevel: 5, wizardLevel: 4, description: "Elf 25 Wizard",
    movement: 5, weaponSkill: 7, ballisticSkill: 6, strength: 4, toughness: 4, wounds: 4, initiative: 9, attacks: 1, leadership: 10, intelligence: 10, cool: 10, willPower: 10
  },
];

export const OTHER_PROFILES: Profile[] = [
  {
    rollNumber: 15, heroLevel: 0, wizardLevel: 0, description: "Beastman",
    movement: 4, weaponSkill: 4, ballisticSkill: 3, strength: 3, toughness: 4, wounds: 2, initiative: 3, attacks: 1, leadership: 6, intelligence: 6, cool: 7, willPower: 6
  },
  {
    rollNumber: 21, heroLevel: 0, wizardLevel: 0, description: "Centaur",
    movement: 8, weaponSkill: 3, ballisticSkill: 4, strength: 4, toughness: 3, wounds: 2, initiative: 3, attacks: 2, leadership: 7, intelligence: 7, cool: 7, willPower: 7
  },
  {
    rollNumber: 24, heroLevel: 0, wizardLevel: 0, description: "Fimir: Finn",
    movement: 4, weaponSkill: 4, ballisticSkill: 3, strength: 4, toughness: 5, wounds: 2, initiative: 3, attacks: 2, leadership: 6, intelligence: 5, cool: 6, willPower: 6
  },
  {
    rollNumber: 27, heroLevel: 0, wizardLevel: 1, description: "Fimir: Shearl",
    movement: 4, weaponSkill: 3, ballisticSkill: 1, strength: 4, toughness: 3, wounds: 2, initiative: 2, attacks: 1, leadership: 6, intelligence: 5, cool: 6, willPower: 6
  },
  {
    rollNumber: 35, heroLevel: 0, wizardLevel: 0, description: "Goblin",
    movement: 4, weaponSkill: 2, ballisticSkill: 3, strength: 3, toughness:3, wounds: 1, initiative: 2, attacks: 1, leadership: 5, intelligence: 5, cool: 5, willPower: 5
  },
  {
    rollNumber: 41, heroLevel: 0, wizardLevel: 0, description: "Dragon Ogre",
    movement: 6, weaponSkill: 4, ballisticSkill: 2, strength: 5, toughness: 5, wounds: 4, initiative: 2, attacks: 3, leadership: 7, intelligence: 4, cool: 7, willPower: 7
  },
  {
    rollNumber: 47, heroLevel: 0, wizardLevel: 0, description: "Hobgoblin",
    movement: 4, weaponSkill: 3, ballisticSkill: 2, strength: 3, toughness: 4, wounds: 1, initiative: 3, attacks: 1, leadership: 7, intelligence: 6, cool: 6, willPower: 6
  },
  {
    rollNumber: 59, heroLevel: 0, wizardLevel: 0, description: "Lizardman",
    movement: 4, weaponSkill: 3, ballisticSkill: 3, strength: 3, toughness: 4, wounds: 2, initiative: 1, attacks: 1, leadership: 9, intelligence: 5, cool: 9, willPower: 9
  },
  {
    rollNumber: 68, heroLevel: 0, wizardLevel: 0, description: "Minotaur",
    movement: 6, weaponSkill: 4, ballisticSkill: 3, strength: 4, toughness: 4, wounds: 3, initiative: 3, attacks: 2, leadership: 9, intelligence: 5, cool: 7, willPower: 6
  },
  {
    rollNumber: 80, heroLevel: 0, wizardLevel: 0, description: "Orc",
    movement: 4, weaponSkill: 3, ballisticSkill: 3, strength: 3, toughness: 4, wounds: 1, initiative: 2, attacks: 1, leadership: 7, intelligence: 5, cool: 7, willPower: 7
  },
  {
    rollNumber: 93, heroLevel: 0, wizardLevel: 0, description: "Skaven",
    movement: 5, weaponSkill: 3, ballisticSkill: 3, strength: 3, toughness: 3, wounds: 1, initiative: 4, attacks: 1, leadership: 6, intelligence: 6, cool: 5, willPower: 7
  },
  {
    rollNumber: 96, heroLevel: 0, wizardLevel: 0, description: "Slann",
    movement: 4, weaponSkill: 3, ballisticSkill: 2, strength: 3, toughness: 4, wounds: 1, initiative: 3, attacks: 1, leadership: 8, intelligence: 7, cool: 9, willPower: 9
  },
  {
    rollNumber: 100, heroLevel: 0, wizardLevel: 0, description: "Zoat",
    movement: 7, weaponSkill: 5, ballisticSkill: 3, strength: 4, toughness: 5, wounds: 3, initiative: 2, attacks: 2, leadership: 10, intelligence: 9, cool: 9, willPower: 9
  },
];
