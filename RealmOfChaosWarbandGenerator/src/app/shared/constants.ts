import { ChaosAttribute, ChaosReward, Profile, ProfileBonus, RuleDescription } from "./models";

export const PERSONAL_ATTRIBUTES: ChaosAttribute[] = [
  { rollNumber: 5, name: "Acid Excretion", fearPoints: 1, description: "" },
  { rollNumber: 10, name: "Additional Eye", fearPoints: 1, description: "" },
  { rollNumber: 15, name: "Agility", fearPoints: 0, description: "" },
  { rollNumber: 20, name: "Albino", fearPoints: 0, description: "" },
  { rollNumber: 25, name: "Alcoholism", fearPoints: 0, description: "" },
  { rollNumber: 30, name: "Atrophy", fearPoints: 0, description: "" },
  { rollNumber: 40, name: "Beaked", fearPoints: 1, description: "" },
  { rollNumber: 175, name: "Bestial Face", fearPoints: 1, description: "" },
  { rollNumber: 180, name: "Beweaponed Extremities", fearPoints: 1, description: "" },
  { rollNumber: 185, name: "Big Ears", fearPoints: 0, description: "" },
  { rollNumber: 190, name: "Bird's Feet", fearPoints: 0, description: "" },
  { rollNumber: 195, name: "Black Skin", fearPoints: 1, description: "" },
  { rollNumber: 200, name: "Blood Rage", fearPoints: 0, description: "" },
  { rollNumber: 210, name: "Blood Substitution", fearPoints: 0, description: "" },
  { rollNumber: 215, name: "Breathes Fire", fearPoints: 1, description: "" },
  { rollNumber: 220, name: "Brightly Patterned Skin", fearPoints: 0, description: "" },
  { rollNumber: 225, name: "Bulging Eyes", fearPoints: 0, description: "" },
  { rollNumber: 230, name: "Burning Body", fearPoints: 3, description: "" },
  { rollNumber: 240, name: "Chaos Lord", fearPoints: 0, description: "" },
  { rollNumber: 250, name: "Chaos Spawn", fearPoints: 0, description: "" },
  { rollNumber: 260, name: "Chaos Were", fearPoints: 2, description: "" },
  { rollNumber: 270, name: "Cloud of Flies", fearPoints: 0, description: "" },
  { rollNumber: 280, name: "Cloven Hooves", fearPoints: 0, description: "" },
  { rollNumber: 285, name: "Cowardice", fearPoints: 0, description: "" },
  { rollNumber: 290, name: "Crest", fearPoints: 0, description: "" },
  { rollNumber: 305, name: "Crossbreed", fearPoints: 1, description: "" },
  { rollNumber: 315, name: "Crown of Flesh", fearPoints: 1, description: "" },
  { rollNumber: 320, name: "Crystalline Body", fearPoints: 2, description: "" },
  { rollNumber: 325, name: "Dimensional Instability", fearPoints: 0, description: "" },
  { rollNumber: 330, name: "Duplication", fearPoints: 0, description: "" },
  { rollNumber: 335, name: "Elastic Limbs", fearPoints: 0, description: "" },
  { rollNumber: 340, name: "Enormously Fat", fearPoints: 0, description: "" },
  { rollNumber: 345, name: "Enormous Noise", fearPoints: 0, description: "" },
  { rollNumber: 355, name: "Evil Eye", fearPoints: 1, description: "" },
  { rollNumber: 365, name: "Extra Joints", fearPoints: 0, description: "" },
  { rollNumber: 370, name: "Extremely Thin", fearPoints: 0, description: "" },
  { rollNumber: 380, name: "Eyestalks", fearPoints: 1, description: "" },
  { rollNumber: 390, name: "Fangs", fearPoints: 1, description: "" },
  { rollNumber: 395, name: "Fast", fearPoints: 0, description: "" },
  { rollNumber: 400, name: "Fear of Blood", fearPoints: 0, description: "" },
  { rollNumber: 405, name: "Feathered Hide", fearPoints: 0, description: "" },
  { rollNumber: 410, name: "Featureless Face", fearPoints: 1, description: "" },
  { rollNumber: 415, name: "Fits", fearPoints: 0, description: "" },
  { rollNumber: 420, name: "Flaming Skull Face", fearPoints: 1, description: "" },
  { rollNumber: 425, name: "Furry", fearPoints: 0, description: "" },
  { rollNumber: 440, name: "GM's Choice", fearPoints: 0, description: "" },
  { rollNumber: 450, name: "Growth", fearPoints: 1, description: "" },
  { rollNumber: 455, name: "Headless", fearPoints: 1, description: "" },
  { rollNumber: 460, name: "Hideous Appearance", fearPoints: 10, description: "" },
  { rollNumber: 465, name: "Hopper", fearPoints: 0, description: "" },
  { rollNumber: 475, name: "Horns", fearPoints: 1, description: "" },
  { rollNumber: 480, name: "Horrible Stench", fearPoints: 0, description: "" },
  { rollNumber: 485, name: "Huge Head", fearPoints: 1, description: "" },
  { rollNumber: 495, name: "Hunchback", fearPoints: 1, description: "" },
  { rollNumber: 500, name: "Hypnotic Gaze", fearPoints: 0, description: "" },
  { rollNumber: 505, name: "Illusion of Normality", fearPoints: 0, description: "" },
  { rollNumber: 510, name: "Invisibility", fearPoints: 0, description: "" },
  { rollNumber: 515, name: "Iron Hard Skin", fearPoints: 1, description: "" },
  { rollNumber: 522, name: "Irrational Fear", fearPoints: 0, description: "" },
  { rollNumber: 535, name: "Irrational Hatred", fearPoints: 0, description: "" },
  { rollNumber: 540, name: "Levitation", fearPoints: 0, description: "" },
  { rollNumber: 550, name: "Limb Loss", fearPoints: 0, description: "" },
  { rollNumber: 560, name: "Limb Transference", fearPoints: 1, description: "" },
  { rollNumber: 565, name: "Long Legs", fearPoints: 1, description: "" },
  { rollNumber: 570, name: "Long Neck", fearPoints: 0, description: "" },
  { rollNumber: 575, name: "Long Nose", fearPoints: 0, description: "" },
  { rollNumber: 580, name: "Long Spines", fearPoints: 1, description: "" },
  { rollNumber: 585, name: "Mace Tail", fearPoints: 0, description: "" },
  { rollNumber: 590, name: "Magic Immune", fearPoints: 0, description: "" },
  { rollNumber: 595, name: "Magic Resistant", fearPoints: 0, description: "" },
  { rollNumber: 600, name: "Magician", fearPoints: 0, description: "" },
  { rollNumber: 605, name: "Mane of Hair", fearPoints: 0, description: "" },
  { rollNumber: 610, name: "Manic Fighter", fearPoints: 0, description: "" },
  { rollNumber: 615, name: "Manikin", fearPoints: 2, description: "" },
  { rollNumber: 620, name: "Massive Intellect", fearPoints: 0, description: "" },
  { rollNumber: 630, name: "Mechanoid", fearPoints: 2, description: "" },
  { rollNumber: 635, name: "Mercreature", fearPoints: 1, description: "" },
  { rollNumber: 640, name: "Metal Body", fearPoints: 3, description: "" },
  { rollNumber: 645, name: "Mindless", fearPoints: 0, description: "" },
  { rollNumber: 655, name: "Moronic", fearPoints: 0, description: "" },
  { rollNumber: 665, name: "Multiple Arms", fearPoints: 0, description: "" },
  { rollNumber: 675, name: "Multiple Heads", fearPoints: 1, description: "" },
  { rollNumber: 680, name: "Multiplication", fearPoints: 0, description: "" },
  { rollNumber: 685, name: "One Eye", fearPoints: 0, description: "" },
  { rollNumber: 700, name: "Overgrown Body Part", fearPoints: 1, description: "" },
  { rollNumber: 705, name: "Pin Head", fearPoints: 1, description: "" },
  { rollNumber: 715, name: "Plague Bearer", fearPoints: 1, description: "" },
  { rollNumber: 720, name: "Pointed Head", fearPoints: 0, description: "" },
  { rollNumber: 725, name: "Poisonous Bite", fearPoints: 0, description: "" },
  { rollNumber: 730, name: "Powerful Legs", fearPoints: 0, description: "" },
  { rollNumber: 735, name: "Prehensile Tail", fearPoints: 0, description: "" },
  { rollNumber: 745, name: "Pseudo-Daemonhood", fearPoints: 5, description: "" },
  { rollNumber: 750, name: "Puny", fearPoints: 0, description: "" },
  { rollNumber: 755, name: "Quadruped/Biped", fearPoints: 0, description: "" },
  { rollNumber: 760, name: "Rapid Regeneration", fearPoints: 0, description: "" },
  { rollNumber: 765, name: "Razor Sharp Claws", fearPoints: 0, description: "" },
  { rollNumber: 770, name: "Rearranged Face", fearPoints: 1, description: "" },
  { rollNumber: 775, name: "Regeneration", fearPoints: 0, description: "" },
  { rollNumber: 780, name: "Resilient", fearPoints: 0, description: "" },
  { rollNumber: 790, name: "Rotting Flesh", fearPoints: 1, description: "" },
  { rollNumber: 795, name: "Scaly Skin", fearPoints: 1, description: "" },
  { rollNumber: 805, name: "Scorpion Tail", fearPoints: 1, description: "" },
  { rollNumber: 810, name: "Short Legs", fearPoints: 0, description: "" },
  { rollNumber: 820, name: "Shrink", fearPoints: -1, description: "" },
  { rollNumber: 825, name: "Siamese Twin", fearPoints: 1, description: "" },
  { rollNumber: 830, name: "Silly Voice", fearPoints: -1, description: "" },
  { rollNumber: 835, name: "Silly Walk", fearPoints: -1, description: "" },
  { rollNumber: 840, name: "Skull Face", fearPoints: 1, description: "" },
  { rollNumber: 845, name: "Snake Tail", fearPoints: 1, description: "" },
  { rollNumber: 850, name: "Spits Acid", fearPoints: 0, description: "" },
  { rollNumber: 855, name: "Strong", fearPoints: 0, description: "" },
  { rollNumber: 860, name: "Suckers", fearPoints: 1, description: "" },
  { rollNumber: 865, name: "Tail", fearPoints: 0, description: "" },
  { rollNumber: 880, name: "Technology", fearPoints: 1, description: "" },
  { rollNumber: 885, name: "Telekinesis", fearPoints: 0, description: "" },
  { rollNumber: 890, name: "Teleport", fearPoints: 0, description: "" },
  { rollNumber: 895, name: "Temporal Instability", fearPoints: 0, description: "" },
  { rollNumber: 920, name: "Tentacles", fearPoints: 1, description: "" },
  { rollNumber: 925, name: "Transparent Skin", fearPoints: 2, description: "" },
  { rollNumber: 930, name: "Uncanny Resemblance", fearPoints: 0, description: "" },
  { rollNumber: 940, name: "Uncontrollable Flatulence", fearPoints: 0, description: "" },
  { rollNumber: 945, name: "Vampire", fearPoints: 2, description: "" },
  { rollNumber: 950, name: "Vividly Coloured Skin", fearPoints: 0, description: "" },
  { rollNumber: 955, name: "Walking Head", fearPoints: 1, description: "" },
  { rollNumber: 960, name: "Warp Frenzy", fearPoints: 0, description: "" },
  { rollNumber: 965, name: "Warty Skin", fearPoints: 0, description: "" },
  { rollNumber: 970, name: "Weapon Master", fearPoints: 0, description: "" },
  { rollNumber: 975, name: "Wings", fearPoints: 1, description: "" },
  { rollNumber: 985, name: "Zoological Mutation", fearPoints: 0, description: "" },
  { rollNumber: 1000, name: "Invent Your Own", fearPoints: 0, description: "" },
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
    movement: 4, weaponSkill: 2, ballisticSkill: 3, strength: 3, toughness: 3, wounds: 1, initiative: 2, attacks: 1, leadership: 5, intelligence: 5, cool: 5, willPower: 5
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

export const SPECIAL_RULES: RuleDescription[] = [
  { id: 0, name: "Double-Handed", description: "Double-handed weapons need both hands, making it impossible to use a shield. Double-handed weapons are treated as improvised if used one-handed." },
  { id: 1, name: "Difficult To Use", description: "Must have a WS of at least 3 to use. If WS is lower the weapon counts as improvised." },
  { id: 2, name: "Mounted Troop Defense", description: "Add +1 initiative against mounted opponents, provided the unit has not been pushed back." },
  { id: 3, name: "Air Troop Defense", description: "Add +1 initiative against aerial opponents." },
  { id: 4, name: "Multiple Ranks", description: "Half of models in the second rank may fight, if immediatly behind an enganged model in the front rank." },
  { id: 5, name: "Chaos Armor", description: "Effective against magical attacks. Can be worn by wizards without affecting casting abilities." },
  { id: 6, name: "Reduced Fear", description: "Reduce any fear effects caused by the mutant by one increment. Lose all 'plusses' and ranges of fear effects due to the ridiculous and unthreatening appearance of the mutant. 'Ordinary' fear becomes 'fear-1' (with a -1 bonus to the tester's dice roll)."},
  { id: 7, name: "No Fear Effect", description: "The mutant does not cause fear."},
  { id: 8, name: "Causes Fear", description: "The mutant causes fear in all living creatures. The mutant itself is immune to fear, except when cauased by Demons or deities." },
  { id: 9, name: "Causes Terror", description: `The mutant causes fear 6"+1/terror in all living creatures. The mutant itself is immune to such effects, except when cauased by Demons or deities.`},
  { id: 10, name: "Causes Terror", description: `The mutant causes fear 6"+2/terror in all living creatures. The mutant itself is immune to such effects, except when cauased by Greater Demons or deities.`},
];

export const MARK_OF_KHORNE: ChaosReward = { name: "Mark of Khorne", description: "Chaos Armor, Lose 1 magic level", rollNumber: 0, specialRules: [], profileBonus: new ProfileBonus() };
export const MARK_OF_SLANEESH: ChaosReward = {
  name: "Mark of Slaneesh", description: "+1 Willpower", rollNumber: 0, specialRules: [], profileBonus: {
    movement:  0,
    weaponSkill:  0,
    ballisticSkill:  0,
    strength:  0,
    toughness:  0,
    wounds: 0,
    initiative:  0,
    attacks: 0,
    leadership: 0,
    intelligence: 0,
    cool: 0,
    willPower:  1
  }};
export const MARK_OF_NURGLE: ChaosReward = {
  name: "Mark of Nurgle", description: "+1 Toughness", rollNumber: 0, specialRules: [], profileBonus: {
    movement: 0,
    weaponSkill: 0,
    ballisticSkill: 0,
    strength: 0,
    toughness: 1,
    wounds: 0,
    initiative: 0,
    attacks: 0,
    leadership: 0,
    intelligence: 0,
    cool: 0,
    willPower: 0
  }
};
export const MARK_OF_TZEENTCH: ChaosReward = { name: "Mark of Tzeentch", description: "D3 Attributes, Magic Item", rollNumber: 0, specialRules: [], profileBonus: new ProfileBonus() };

export const STANDARD_REWARDS: ChaosReward[] = [
  { rollNumber: 43, name: "Frenzy", description: "Champion and all current members of his Warband becom subject to frenzy. Subsequent gifts of frenzy reduce cool by -1 to a minimum of 2", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 48, name: "Demon Weapon", description: "Champion is gifted with a deamon weapon. A Champion can be gifted up two demon weapons, but if he receives a 3rd then the two he already has merge into a single mighty blade. Unless the Champion is a follower of Khorne, he may forsake the Demon Weapon in favor of a randomly generated magic item.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 53, name: "Chaos Armor", description: "Champion is gifted with Chaos Armor 4+. Chaos Armor is effective against magical attacks and can be worn by a wizard without affecting his abilities in any way. If the Champion already has Chaos Armor it's saving throw is increased by +1. On a D6 roll of 4+ it fuses with the Champion's body increasing his toughness by +1.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 58, name: "Demonic Steed", description: "Champton recieves a Demonic Steed.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 63, name: "Chaos Spawn", description: "Champion is gifted with D6 Chaos Spawn to use in whatever manner he chooses, for example as mounts, fighters, or pull chariots.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 69, name: "Strength", description: "Champion is gifted with great strength. Add +3 to strength up to a maximum of 10.", specialRules: [], profileBonus: {
    movement: 0,
    weaponSkill: 0,
    ballisticSkill: 0,
    strength: 3,
    toughness: 0,
    wounds: 0,
    initiative: 0,
    attacks: 0,
    leadership: 0,
    intelligence: 0,
    cool: 0,
    willPower: 0}
  },
  { rollNumber: 85, name: "Gift of the Gods", description: "Roll from the Champion's Patron Gift Table. If the Champion has no Patron this result must be re-rolled. If same result is rolled a second time the champion is rewarded with a Chaos Attribute instead.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 90, name: "Demonic Creatures", description: "Champion is gifted with D6 Chaos Hounds. If the Champion has a Patron he can choose a single 'beast' creature of his Patron instead. (Fleshhound/Fiend/Beast of Nurgle/Flamer)", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 100, name: "Eye of God", description: "Champion is judged by the Chaos Gods. 1) If the champion has 6+ Rewards and less than 6 Attributes they become a Demon Prince. 2) If the champion has 6 or more attributes they become a Chaos Spawn. 3) Otherwise the Champion is given a chaos Weapon. Wizards recieve +1 attack and +1 wound. Non-Khorne or non-wizard Champions become lvl 1 wizards. Khorne champions are given a Collar of Khorne and a Fleshhound instead.", specialRules: [], profileBonus: new ProfileBonus() }
]
