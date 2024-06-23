import { ChaosAttribute, ChaosReward, Profile, ProfileBonus, RuleDescription, Armor, Weapon } from "./models";

export const PERSONAL_ATTRIBUTES: ChaosAttribute[] = [
  { rollNumber: 5, name: "Acid Excretion", fearPoints: 1, description: "Any create in combat with the mutant suffers one S5 hit every turn it fails to hit the mutant. Non-magical weapons are destroyed on the first wounding blow. Non-magical armor and shields are destroyed after first armor save. The mutant may not wear non-magical armor or use non-magical weapons.", profileBonus: new ProfileBonus() },
  { rollNumber: 10, name: "Additional Eye", fearPoints: 1, description: "", profileBonus: new ProfileBonus() },
  {
    rollNumber: 15, name: "Agility", fearPoints: 0, description: "Initiative + 3", profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 3,
      attacks: 0,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    }
  },
  {
    rollNumber: 20, name: "Albino", fearPoints: 0, description: "Reduce T by -0.5", profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: -0.5,
      wounds: 0,
      initiative: 0,
      attacks: 0,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    } },
  {
    rollNumber: 25, name: "Alcoholism", fearPoints: 0, description: "Reduce M by -1. Roll a D6 each full game turn, on a 6 the mutant is drunk. Each player rolls D6 at the start of their turn: 1: Mutant staggers in random direction. 2-4: Mutant stands still in drunken haze. 5/6: That player controls the mutant this turn.", profileBonus: {
      movement: -1,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 0,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    } },
  { rollNumber: 30, name: "Atrophy", fearPoints: 0, description: "Roll D6 to determin how many parts are attrified: 1-3 = One, 4-5 = Two, 6 = Three. Reduce I and T by -0.5 per affected area. Roll D6 to determine area: 1 = Head (Int -2, Stupidity), 2-4 = Arm (A-1), 5-6 = Leg (M-2)", profileBonus: new ProfileBonus() },
  { rollNumber: 40, name: "Beaked", fearPoints: 1, description: "+1 Bite Attack", profileBonus: new ProfileBonus() },
  {
    rollNumber: 175, name: "Bestial Face", fearPoints: 1, description: "Roll D10 to determine face type: 1-2 = Face of beast of Patron (Khorne followers may choose Dog Face +1 Bite Attack), 3-9 = Goat face (+1 Gore Attack), 10 = Consult Extended Table (D20)", profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 1,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    } },
  { rollNumber: 180, name: "Beweaponed Extremities", fearPoints: 1, description: "Mutants without arms also suffer 'Quadruped/Biped' effects. Roll D6 to determine type: 1-3: Blades, 4-6 Maces. S+1, I-1, AP-1 for attacks with these weapons. Mutant cannot use other weapon types.", profileBonus: new ProfileBonus() },
  { rollNumber: 185, name: "Big Ears", fearPoints: 0, description: "", profileBonus: new ProfileBonus() },
  {
    rollNumber: 190, name: "Bird's Feet", fearPoints: 0, description: "T +0.5. If the mutant can fly, it also gains +2 Claw Attacks if flying above opponent.", profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0.5,
      wounds: 0,
      initiative: 0,
      attacks: 0,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    }
},
  { rollNumber: 195, name: "Black Skin", fearPoints: 1, description: "", profileBonus: new ProfileBonus() },
  {
    rollNumber: 200, name: "Blood Rage", fearPoints: 0, description: `Subject to frenzy when withing 12" of a wounded created, including itself. The frenzy lasts for 2D6 turns. If there are no enemies in sight the mutant will attach an ally unless it makes a successful Cool test. The mutant's T increases by one.`, profileBonus: {
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
    } },
  { rollNumber: 210, name: "Blood Substitution", fearPoints: 0, description: "Roll D6 to determine blood type: 1-2: Leeches or Maggots, 3: Acid, 4: Protoplasm, 5: Molten Metal, 6: Electricity. Once wounded add 3 to mutant's Fear Points.", profileBonus: new ProfileBonus() },
  { rollNumber: 215, name: "Breathes Fire", fearPoints: 1, description: `The mutant can Breathe Fire once per turn, but cannot make bite attacks in the same turn. All hits use the mutant's Strength. Number of hits and size of template vary based on mutant's size: Larger than man-sized = 12"x4", 3 hits, Man-sized = 6"x3", 2 hits, Smaller = 3"x1", 1 hit`, profileBonus: new ProfileBonus() },
  { rollNumber: 220, name: "Brightly Patterned Skin", fearPoints: 0, description: "", profileBonus: new ProfileBonus() },
  { rollNumber: 225, name: "Bulging Eyes", fearPoints: 0, description: "", profileBonus: new ProfileBonus() },
  {
    rollNumber: 230, name: "Burning Body", fearPoints: 3, description: "The mutant causes an additional S4 hit every time it strikes in combat. Opponents subtract 2 from hit rolls. When an opponent hits the mutant oon a D6 roll of 1-3 they take a S2 hit. The mutant can only carry magical equipment.", profileBonus: {
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
},
  { rollNumber: 240, name: "Chaos Lord", fearPoints: 0, description: "The mutant gets 2 rolls on the Retinue Table. Roll a D6 for these items, on a 4+ the mutant receives the item: 1: Chaos Armor, 2: One Magic Level (Khorne followers receive Collar of Khorne and a Fleshhound), 3: D6 Chaos Attributes, 4: Demon Weapon, 5: Stat Upgrades (WS+D4, BS+D4, S+2, T+1, W+D3, I+D4, A+D3, LD+D3, Int+D3, Cl+D3, Wp+D3) )", profileBonus: new ProfileBonus() },
  { rollNumber: 250, name: "Chaos Spawn", fearPoints: 0, description: "The mutant gains D6 Chaos Attributes and becomes a Chaos Spawn. The mutant is subject to Stupidity.This should be re-rolled if champion is being initially generated.", profileBonus: new ProfileBonus() },
  { rollNumber: 260, name: "Chaos Were", fearPoints: 2, description: "Generate a random Chaos creature under 'Instant' Chaos Spawn, but only give it D6 attributes. The mutant is now subject to frenzy, and becomes this other creature when a frenzy test is failed. Can only wear Chaos Armor. Every time the mutant gains an attribute the were form gains another separately generated attribute.", profileBonus: new ProfileBonus() },
  { rollNumber: 270, name: "Cloud of Flies", fearPoints: 0, description: "Opponents suffer -1 to hit in combat.", profileBonus: new ProfileBonus() },
  { rollNumber: 280, name: "Cloven Hooves", fearPoints: 0, description: "", profileBonus: new ProfileBonus() },
  { rollNumber: 285, name: "Cowardice", fearPoints: 0, description: "Cool is reduced by half. Must make a successful Cool test in order to Charge. Subject to fear of any attackers who outnumber it's unit or side. May not accept challenges.", profileBonus: new ProfileBonus() },
  { rollNumber: 290, name: "Crest", fearPoints: 0, description: "", profileBonus: new ProfileBonus() },
  { rollNumber: 305, name: "Crossbreed", fearPoints: 1, description: "Roll a D6 then D12 for creature to cross with. Roll a D6 for Head/Upper Body/Lower Body/Arms/Legs to determine body parts. The mutant's new profile is an average of it's old profile and the new creature profiles (Add together and divide by 2 and round to nearest whole/half number)", profileBonus: new ProfileBonus() },
  { rollNumber: 315, name: "Crown of Flesh", fearPoints: 1, description: "Roll a D8 to determin crown type.", profileBonus: new ProfileBonus() },
  { rollNumber: 320, name: "Crystalline Body", fearPoints: 2, description: "Toughness becomes 6, but Wounds become 1. Neither attributes can be altered unless the mutant's crystal structure is altered.", profileBonus: new ProfileBonus() }, 
  { rollNumber: 325, name: "Dimensional Instability", fearPoints: 0, description: "The mutant is subject to Instability.", profileBonus: new ProfileBonus() },
  { rollNumber: 330, name: "Duplication", fearPoints: 0, description: "The mutant splits into two entirely separate but initially identical beings.", profileBonus: new ProfileBonus() },
  { rollNumber: 335, name: "Elastic Limbs", fearPoints: 0, description: `The mutant can stretch it's limbs up to 1+D6". It can make hand-to-hand attacks at this distance. Opponents can only strike back after a successful initiative test. Non-Chaos Armor does not cover limbs when attacking at a distance.`, profileBonus: new ProfileBonus() },
  {
    rollNumber: 340, name: "Enormously Fat", fearPoints: 0, description: "Movement is cut in half, T+1", profileBonus: {
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
    } },
  { rollNumber: 345, name: "Enormous Noise", fearPoints: 0, description: `Each turn a D6 roll of 6 means the mutant has produced it's distinctive sound. Enemy units within 6" are startled suffer -1 (or +1 where appropriate) to dice rolls.`, profileBonus: new ProfileBonus() },
  { rollNumber: 355, name: "Evil Eye", fearPoints: 1, description: `Enemy creatures within 4" must take an I test to avoid it's gaze or suffer -1 (or +1 where appropriate) to all dice rolls.`, profileBonus: new ProfileBonus() },
  { rollNumber: 365, name: "Extra Joints", fearPoints: 0, description: "Roll a D6 to determine affected area: 1-3=Arms(I+1), 4-5=Legs(M+1), 6=Arms and Legs(I+1, M+1)", profileBonus: new ProfileBonus() },
  { rollNumber: 370, name: "Extremely Thin", fearPoints: 0, description: "Divide T by 2", profileBonus: new ProfileBonus() },
  { rollNumber: 380, name: "Eyestalks", fearPoints: 1, description: "", profileBonus: new ProfileBonus() },
  { rollNumber: 390, name: "Fangs", fearPoints: 1, description: "Mutant gains a Bite Attack if it does not already have one", profileBonus: new ProfileBonus() },
  {
    rollNumber: 395, name: "Fast", fearPoints: 0, description: "The mutant develops remarkable speed using it's feet, wheels, tentacles, hooves or other strange motive apparatus.", profileBonus: {
      movement: 3,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 0,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    } },
  { rollNumber: 400, name: "Fear of Blood", fearPoints: 0, description: `If a wound is caused within 6" the mutant must pass a Wp test or it does nothing this turn.`, profileBonus: new ProfileBonus() },
  { rollNumber: 405, name: "Feathered Hide", fearPoints: 0, description: "", profileBonus: new ProfileBonus() },
  { rollNumber: 410, name: "Featureless Face", fearPoints: 1, description: "", profileBonus: new ProfileBonus() },
  { rollNumber: 415, name: "Fits", fearPoints: 0, description: `Mutant suffers fits when within 12" of a creature it fears. On a D6 roll of 6 it can do nothing this turn. Fits last until a WP test is passed at the start of subsequent turns.`, profileBonus: new ProfileBonus() },
  { rollNumber: 420, name: "Flaming Skull Face", fearPoints: 1, description: "Gore or Bite attacks cause an additional S1 hit.", profileBonus: new ProfileBonus() },
  { rollNumber: 425, name: "Furry", fearPoints: 0, description: "", profileBonus: new ProfileBonus() },
  { rollNumber: 440, name: "GM's Choice", fearPoints: 0, description: "Choose a fitting mutation", profileBonus: new ProfileBonus() },
  { rollNumber: 450, name: "Growth", fearPoints: 1, description: "The mutant grows D3+1 times its original size. X2 = M*1.5, S+2, T+1, W*1.5, I-1, FP+1. X3 = M*2, WS-1, S+3, T+2, W*2, I-3, FP+2, X2 = M*2.5, S+4, T+3, W*2.5, I-5, FP+3. Non-Chaos Armor must be discarded.", profileBonus: new ProfileBonus() },
  { rollNumber: 455, name: "Headless", fearPoints: 1, description: "Non-Chaos Armor must be discarded.", profileBonus: new ProfileBonus() },
  { rollNumber: 460, name: "Hideous Appearance", fearPoints: 10, description: "", profileBonus: new ProfileBonus() },
  { rollNumber: 465, name: "Hopper", fearPoints: 0, description: "Divide M by 3, rounding fractions to the nearest whole number.", profileBonus: new ProfileBonus() },
  { rollNumber: 475, name: "Horns", fearPoints: 1, description: "+1 Gore Attack", profileBonus: new ProfileBonus() },
  { rollNumber: 480, name: "Horrible Stench", fearPoints: 0, description: `Stench has a range of D6". All living enemy creatures within range suffer -1 (or +1 where appropriate) to dice rolls. The stench persists even after mutant is killed. Friendly units get +2 to route tests.`, profileBonus: new ProfileBonus() },
  { rollNumber: 485, name: "Huge Head", fearPoints: 1, description: "", profileBonus: new ProfileBonus() },
  { rollNumber: 495, name: "Hunchback", fearPoints: 1, description: "Non-Chaos Armor must be discarded.", profileBonus: new ProfileBonus() },
  { rollNumber: 500, name: "Hypnotic Gaze", fearPoints: 0, description: `The mutant may fix it's gaze on one opponent withing 6". They may make a WP test to avoid eye contact, or they may do nothing. When the mutant's gaze is removed, they must pass a WP test to act normally again.`, profileBonus: new ProfileBonus() },
  { rollNumber: 505, name: "Illusion of Normality", fearPoints: 1, description: "Mutant's fear points only come into play when engaged in hand-to-hand combat.", profileBonus: new ProfileBonus() },
  { rollNumber: 510, name: "Invisibility", fearPoints: 2, description: "The mutant can become invisible at will. It must become visible to attack. It may strike an opponent in hand-to-hand then become invisible immediately. Opponent must pass I test to strike back or suffer -4 to hit.", profileBonus: new ProfileBonus() },
  {
    rollNumber: 515, name: "Iron Hard Skin", fearPoints: 1, description: "+3 Armor Save ", profileBonus: new ProfileBonus()
  },
  { rollNumber: 522, name: "Irrational Fear", fearPoints: 0, description: "Roll D6 to determine number of things feared, D6 to determine extent of fear, D100 to determine things feared.", profileBonus: new ProfileBonus() },
  { rollNumber: 535, name: "Irrational Hatred", fearPoints: 0, description: "Use irrational fear chart to determine hatred", profileBonus: new ProfileBonus() },
  { rollNumber: 540, name: "Levitation", fearPoints: 0, description: "Mutant gains 2D10 Levitation Points. Gains 2 Fear Points while levatating.", profileBonus: new ProfileBonus() },
  { rollNumber: 550, name: "Limb Loss", fearPoints: 0, description: "Roll D6 to determine limbs lost. 1: All Arms(No weapon or claw attacks, No shield), 2: All Legs(M0), 3-4: One Arm(), 5-6: One Leg(M*0.5)", profileBonus: new ProfileBonus() },
  { rollNumber: 560, name: "Limb Transference", fearPoints: 1, description: "Use chart to determine which parts are moved where.", profileBonus: new ProfileBonus() },
  {
    rollNumber: 565, name: "Long Legs", fearPoints: 1, description: "M+1. Non-Chaos Armor must be discarded.", profileBonus: {
      movement: 1,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 0,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    } },
  { rollNumber: 570, name: "Long Neck", fearPoints: 0, description: "Mutant may ignore line-of-sight effects of walls and hedges.", profileBonus: new ProfileBonus() },
  { rollNumber: 575, name: "Long Nose", fearPoints: 0, description: "", profileBonus: new ProfileBonus() },
  { rollNumber: 580, name: "Long Spines", fearPoints: 1, description: "On a D6 roll of 1 the spines are also poisonous. The mutant may only wear Chaos Armor. Opponents must pass I test or take S1 (S2 if poisonous) hit from spines", profileBonus: new ProfileBonus() },
  { rollNumber: 585, name: "Mace Tail", fearPoints: 0, description: "Gains a Tail Attack if they do not already have one. Tail Attack gets S+1.", profileBonus: new ProfileBonus() },
  { rollNumber: 590, name: "Magic Immune", fearPoints: 0, description: "Magic has no effect on the mutant. Magic weapons are treated as non-magical when attacking the mutant.", profileBonus: new ProfileBonus() },
  { rollNumber: 595, name: "Magic Resistant", fearPoints: 0, description: "Magic saving throws get +2 bonus. Save can be made against magic that normally doesn't allow saves, although this save does not get +2 bonus.", profileBonus: new ProfileBonus() },
  { rollNumber: 600, name: "Magician", fearPoints: 0, description: "Gain 1 magic level plus associated spells.", profileBonus: new ProfileBonus() },
  { rollNumber: 605, name: "Mane of Hair", fearPoints: 0, description: "The mutant may shave it's mane so that it may wear a helmet.", profileBonus: new ProfileBonus() },
  { rollNumber: 610, name: "Manic Fighter", fearPoints: 0, description: `Hates enemy units within 12". Never makes rout tests as a result of hand-to-hand combat.`, profileBonus: new ProfileBonus() },
  { rollNumber: 615, name: "Manikin", fearPoints: 2, description: "", profileBonus: new ProfileBonus() },
  {
    rollNumber: 620, name: "Massive Intellect", fearPoints: 0, description: "Int+2", profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 0,
      leadership: 0,
      intelligence: 2,
      cool: 0,
      willPower: 0
    } },
  { rollNumber: 630, name: "Mechanoid", fearPoints: 2, description: "Roll D6 to determine extent of changes: 1-3 = Completely Mechanical (WS+1,S+4,T+2,A+1), 4-6 = Partially Mechanical (D10: 1=Head(A+1 Bite), 2=Body(T+2), 3-5=Arms(S+2, WS+1), 6-7=Hands(S+2), 8-0=Legs(See Chart)...", profileBonus: new ProfileBonus() },
  { rollNumber: 635, name: "Mercreature", fearPoints: 1, description: "Mutant can breath under water and swim full Move value. Movement on land is reduced to 1.", profileBonus: new ProfileBonus() },
  { rollNumber: 640, name: "Metal Body", fearPoints: 3, description: "Divide WS and BS by two, S+3, T=7. Immune to fire-based and cold-based damage. Cannot be hit by non-magical weapons. Electic-based attacks cause double damage.", profileBonus: new ProfileBonus() },
  { rollNumber: 645, name: "Mindless", fearPoints: 0, description: "Int=0. Can no longer used weapons or cast spells. Cannot be a unit or warband leader. Immune to psychological effects. A champion who becomes mindels automatically turns into a Chaos Spawn.", profileBonus: new ProfileBonus() },
  {
    rollNumber: 655, name: "Moronic", fearPoints: 0, description: "Int-2. Must take Cl test before taking any action. If Int <= 4 it cannot use weapons.", profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 0,
      leadership: 0,
      intelligence: -2,
      cool: 0,
      willPower: 0
    } },
  { rollNumber: 665, name: "Multiple Arms", fearPoints: 0, description: "A+1, T+0.5 per arm. Roll D6: 1=One Arm, 2-4=Two Arms, 5=Three Arms, 6=Four Arms. Arms can carry shield or weapons, but no mutant may carry more than 2 shields.", profileBonus: new ProfileBonus() },
  { rollNumber: 675, name: "Multiple Heads", fearPoints: 1, description: "Roll D6 to determine extra heads: 1-5=One Head, 6=Two Heads. Mutant always has at least as many attacks as it has heads.", profileBonus: new ProfileBonus() },
  { rollNumber: 680, name: "Multiplication", fearPoints: 0, description: `When within 12" of an enemy, a D6 roll of 6 caused the mutant to split into D6 fragments. FP+3 while split. S and W divided equally amongs fragments (with a min value of 1). Lasts for D6 turns, after which any surviving fragments recombine (mutant player chooses which fragment they combined to). As long as one fragment survives the mutant is restored to full size and health.`, profileBonus: new ProfileBonus() },
  { rollNumber: 685, name: "One Eye", fearPoints: 0, description: "Divide BS by two", profileBonus: new ProfileBonus() },
  { rollNumber: 700, name: "Overgrown Body Part", fearPoints: 1, description: "Roll D6 to determine area affected, D3+1 to determine extent of change.", profileBonus: new ProfileBonus() },
  {
    rollNumber: 705, name: "Pin Head", fearPoints: 1, description: "Subject to Stupidity. Can no longer make weapon attacks if Int <= 4. Must pass a Cool test to take any action.", profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 0,
      leadership: 0,
      intelligence: -2,
      cool: 0,
      willPower: 0
    } },
  { rollNumber: 715, name: "Plague Bearer", fearPoints: 1, description: "Followers of Nurgel gain Nurgle's Rot. Others roll D6: 1=The Shakes (WS-1, A-1), 2=Eye Rot(BS-1), 3=Creeping Buboes(M-1, I-1), 4=Bone Ague(S-1, T-1), 5=Grey Fever (Ld-1,Int-1,Cl-1,Wp-1), 6=Green Pox(W*0.2). No stat can drop below 1 as a result of plague. Opponents that land a hit must take T test or get infected.", profileBonus: new ProfileBonus() },
  {
    rollNumber: 720, name: "Pointed Head", fearPoints: 0, description: "Int-1", profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 0,
      leadership: 0,
      intelligence: -1,
      cool: 0,
      willPower: 0
    }
},
  { rollNumber: 725, name: "Poisonous Bite", fearPoints: 0, description: "Mutant gains Bite Attack if it doesn't already have one. Bite Attack is made with S+1", profileBonus: new ProfileBonus() },
  { rollNumber: 730, name: "Powerful Legs", fearPoints: 0, description: `Mutant may use full movement value, then jump half it's movement in the same turn. Can jump of obstacles less than 2" high. Mutants with birds feet may mak claw attacks if leaping over opponents.`, profileBonus: new ProfileBonus() },
  { rollNumber: 735, name: "Prehensile Tail", fearPoints: 0, description: "Mutant may carry an extra weapon or shield with tail. No mutant may carry more than two shields.", profileBonus: new ProfileBonus() },
  { rollNumber: 745, name: "Pseudo-Daemonhood", fearPoints: 5, description: `Gains horns wings and tail. Horns grant Gore Attack +1 if it does not already have one. Roll to generate Flight Profile (Min Speed:2D4-2", Max Speed:4D6", Acc/Dec:2D4-1". Non-Chaos Armor must be discarded.`, profileBonus: new ProfileBonus() },
  { rollNumber: 750, name: "Puny", fearPoints: 0, description: "Divide S and T by four, rounding down. Stats cannot be reduced to below 1.", profileBonus: new ProfileBonus() },
  { rollNumber: 755, name: "Quadruped/Biped", fearPoints: 0, description: "Two of a bipedal mutant's arms become legs - or two of a quadraped's legs become arms. Increase/Decrease M by 2 depending on legs added/lost. Increase/Decrease Weapon Attacks depending on arms added/lost.", profileBonus: new ProfileBonus() },
  { rollNumber: 760, name: "Rapid Regeneration", fearPoints: 0, description: "Mutant may regenerate at end of turn - even if dead. Roll 2D6, if either are 4+ regain all lost wounds. If roll fails, mutant cannot regenerate those wounds this battle.", profileBonus: new ProfileBonus() },
  {
    rollNumber: 765, name: "Razor Sharp Claws", fearPoints: 0, description: "+1 Claw Attack made with S+1", profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 1,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    } },
  { rollNumber: 770, name: "Rearranged Face", fearPoints: 1, description: "", profileBonus: new ProfileBonus() },
  { rollNumber: 775, name: "Regeneration", fearPoints: 0, description: "Mutant may regenerate at end of turn - even if dead. Roll D6, on 4+ all lost wounds are recovered. If roll fails, mutant cannot regenerate those wounds this battle.", profileBonus: new ProfileBonus() },
  {
    rollNumber: 780, name: "Resilient", fearPoints: 0, description: "", profileBonus: {
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
    } },
  { rollNumber: 790, name: "Rotting Flesh", fearPoints: 1, description: "", profileBonus: new ProfileBonus() },
  { rollNumber: 795, name: "Scaly Skin", fearPoints: 1, description: "+1 Armor Save", profileBonus: new ProfileBonus() },
  {
    rollNumber: 805, name: "Scorpion Tail", fearPoints: 1, description: "A+1. Roll D6: 1-2 = Non-poisonous, attack to front and sides only, 4-6: Poisonous, attack S+1 to front only.", profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 1,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    } },
  { rollNumber: 810, name: "Short Legs", fearPoints: 0, description: "Divide movement by two, rounding down.", profileBonus: new ProfileBonus() },
  { rollNumber: 820, name: "Shrink", fearPoints: -1, description: "Roll D6 to determin extent of shrink.", profileBonus: new ProfileBonus() },
  { rollNumber: 825, name: "Siamese Twin", fearPoints: 1, description: "Roll D6: 1-3=Back to back, 4-6=Side by side. If one mutant is killed, both die. Fear points are combined. Movement is divided by two.", profileBonus: new ProfileBonus() },
  { rollNumber: 830, name: "Silly Voice", fearPoints: -1, description: "", profileBonus: new ProfileBonus() },
  {
    rollNumber: 835, name: "Silly Walk", fearPoints: -1, description: "", profileBonus: {
      movement: -1,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 0,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    } },
  { rollNumber: 840, name: "Skull Face", fearPoints: 1, description: "", profileBonus: new ProfileBonus() },
  { rollNumber: 845, name: "Snake Tail", fearPoints: 1, description: "+1 Attack to front, sides, and rear with S1. On a D6 froll of 4+ the bite is poisonous and hits automatically.", profileBonus: new ProfileBonus() },
  { rollNumber: 850, name: "Spits Acid", fearPoints: 0, description: `May spit acid 5" instead of one of it's normal attacks. Use BS to hit with S3. Mutant may not bite and spit in the same turn.`, profileBonus: new ProfileBonus() },
  {
    rollNumber: 855, name: "Strong", fearPoints: 0, description: "", profileBonus: {
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
      willPower: 0
    } },
  { rollNumber: 860, name: "Suckers", fearPoints: 1, description: "Mutant can attach itself to opponent by making a normal to-hit roll. No other attacks can be made when attaching. While attached, increase WS by 2 and reduce opponent's WS by 2. Any wound suffered by mutant will cause it to let go.", profileBonus: new ProfileBonus() },
  { rollNumber: 865, name: "Tail", fearPoints: 0, description: "Cosmetic tail does not affect profile.", profileBonus: new ProfileBonus() },
  {
    rollNumber: 880, name: "Technology", fearPoints: 1, description: "Int+2. If WS or BS is zero, increase to 1. If Int <= 4 weapon must be activated by a rider or handler. Roll to determin technology type.", profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 0,
      leadership: 0,
      intelligence: 2,
      cool: 0,
      willPower: 0
    } },
  { rollNumber: 885, name: "Telekinesis", fearPoints: 0, description: "Mutant can manipulate inanimate objects. Must pass a WP test (per use, not per turn) and can do nothing else at the same time.", profileBonus: new ProfileBonus() },
  { rollNumber: 890, name: "Teleport", fearPoints: 0, description: `Roll D6: 1-5:Mutant can teleport self, 6: Mutant can teleport anybody. Can teleport one creature per turn up to D6xD6". Roll for distance each attempt. Must be within 2" of creature being teleported. Creatures not wishing to be teleports can cancel by passing a WP test. Must pass Int test or target scatters D12".`, profileBonus: new ProfileBonus() },
  { rollNumber: 895, name: "Temporal Instability", fearPoints: 0, description: "Roll D6: 1-4 Involuntary (Every turn D6 roll of 6 causes mutant to dissapear for D6 turns), 5-6 Voluntary (Every turn D6 roll of 6 causes mutant to dissapear for D6 turns. Mutant may increase/decrease die rolls by 1) ", profileBonus: new ProfileBonus() },
  { rollNumber: 920, name: "Tentacles", fearPoints: 1, description: "Roll D6: 1-3=One Arm, 4-5=D3 Arms, 6=All Arms. Tentacles can grip weapons as normal.", profileBonus: new ProfileBonus() },
  { rollNumber: 925, name: "Transparent Skin", fearPoints: 2, description: "", profileBonus: new ProfileBonus() },
  { rollNumber: 930, name: "Uncanny Resemblance", fearPoints: 0, description: "", profileBonus: new ProfileBonus() },
  { rollNumber: 940, name: "Uncontrollable Flatulence", fearPoints: 0, description: `Roll D6 each turn. On 5-6 the mutant emits a cloud of gas D4" in diameter that lasts for D3 turns. Roll D6 to determine gas type: 1-2=Poison(T test, death), 3=Paralysing(T test, paralyzed), 4=Noxious(T test, S-1), 5=Oily Smoke(As Mystic Mist), 6=Crazy(T test, frenzy). Gas clouds move D6" in random direction.`, profileBonus: new ProfileBonus() },
  { rollNumber: 945, name: "Vampire", fearPoints: 2, description: "Gains 4D6 Blood Points. Each turn on D6 roll of 3+ it must expend a blood point or remain immobile. If attacked while immobile, must spend 1 blood point to defend itself. Mutant dies if reduces to 0 blood points. Regains one blood point per wound it inflicts in hand-to-hand.", profileBonus: new ProfileBonus() },
  { rollNumber: 950, name: "Vividly Coloured Skin", fearPoints: 0, description: "", profileBonus: new ProfileBonus() },
  { rollNumber: 955, name: "Walking Head", fearPoints: 1, description: "Non-Chaos Armor must be discarded.", profileBonus: new ProfileBonus() },
  { rollNumber: 960, name: "Warp Frenzy", fearPoints: 0, description: "Mutant is subject to frenzy. While frenzied roll on Warp Frenzy chart for additional attributes, adding 5 Fear Points plus any caused by additional attributes.", profileBonus: new ProfileBonus() },
  { rollNumber: 965, name: "Warty Skin", fearPoints: 0, description: "+1 Armor Save", profileBonus: new ProfileBonus() },
  { rollNumber: 970, name: "Weapon Master", fearPoints: 0, description: "Increase either WS or BS by 6 (players choice) up to a maximum of 10.", profileBonus: new ProfileBonus() },
  { rollNumber: 975, name: "Wings", fearPoints: 1, description: "Roll D6 for wing type and flight stats.", profileBonus: new ProfileBonus() },
  { rollNumber: 985, name: "Zoological Mutation", fearPoints: 0, description: "Roll D100 to determine body parts that change. Roll D100 to determine 'donor' species. FP+1 for each body part changed.", profileBonus: new ProfileBonus() },
  { rollNumber: 1000, name: "Invent Your Own", fearPoints: 0, description: "", profileBonus: new ProfileBonus() },
];

export const HERO_BONUS_PROFILES: Profile[] = [
  {
    rollNumber: 0, heroLevel: 0, wizardLevel: 0, description: "",
    movement: 0, weaponSkill: 0, ballisticSkill: 0, strength: 0, toughness: 0, wounds: 0, initiative: 0, attacks: 0, leadership: 0, intelligence: 0, cool: 0, willPower: 0,
  },
  {
    rollNumber: 1, heroLevel: 1, wizardLevel: 0, description: "Lvl 5 Hero",
    movement: 0, weaponSkill: 1, ballisticSkill: 1, strength: 1, toughness: 0, wounds: 0, initiative: 1, attacks: 1, leadership: 0, intelligence: 0, cool: 0, willPower: 0,
  },
  {
    rollNumber: 2, heroLevel: 2, wizardLevel: 0, description: "Lvl 10 Hero",
    movement: 0, weaponSkill: 2, ballisticSkill: 1, strength: 1, toughness: 1, wounds: 1, initiative: 1, attacks: 2, leadership: 1, intelligence: 0, cool: 0, willPower: 0,
  },
  {
    rollNumber: 3, heroLevel: 3, wizardLevel: 0, description: "Lvl 15 Hero",
    movement: 0, weaponSkill: 2, ballisticSkill: 1, strength: 1, toughness: 1, wounds: 2, initiative: 2, attacks: 2, leadership: 2, intelligence: 0, cool: 1, willPower: 1,
  },
  {
    rollNumber: 4, heroLevel: 4, wizardLevel: 0, description: "Lvl 20 Hero",
    movement: 0, weaponSkill: 3, ballisticSkill: 1, strength: 1, toughness: 1, wounds: 3, initiative: 3, attacks: 3, leadership: 3, intelligence: 0, cool: 1, willPower: 1,
  },
  {
    rollNumber: 5, heroLevel: 5, wizardLevel: 0, description: "Lvl 25 Hero",
    movement: 0, weaponSkill: 3, ballisticSkill: 2, strength: 1, toughness: 1, wounds: 3, initiative: 3, attacks: 3, leadership: 3, intelligence: 2, cool: 2, willPower: 2,
  },
  {
    rollNumber: 6, heroLevel: 0, wizardLevel: 1, description: "Lvl 5 Wizard",
    movement: 0, weaponSkill: 1, ballisticSkill: 0, strength: 1, toughness: 0, wounds: 0, initiative: 0, attacks: 0, leadership: 0, intelligence: 1, cool: 1, willPower: 1,
  },
  {
    rollNumber: 7, heroLevel: 0, wizardLevel: 2, description: "Lvl 10 Wizard",
    movement: 0, weaponSkill: 1, ballisticSkill: 0, strength: 1, toughness: 0, wounds: 1, initiative: 1, attacks: 1, leadership: 1, intelligence: 2, cool: 1, willPower: 2,
  },
  {
    rollNumber: 8, heroLevel: 0, wizardLevel: 3, description: "Lvl 15 Wizard",
    movement: 0, weaponSkill: 2, ballisticSkill: 0, strength: 1, toughness: 1, wounds: 2, initiative: 1, attacks: 1, leadership: 2, intelligence: 2, cool: 2, willPower: 2,
  },
  {
    rollNumber: 9, heroLevel: 0, wizardLevel: 4, description: "Lvl 20 Wizard",
    movement: 0, weaponSkill: 2, ballisticSkill: 1, strength: 1, toughness: 1, wounds: 3, initiative: 2, attacks: 2, leadership: 2, intelligence: 3, cool: 2, willPower: 3,
  },
  {
    rollNumber: 10, heroLevel: 0, wizardLevel: 5, description: "Lvl 25 Wizard",
    movement: 0, weaponSkill: 3, ballisticSkill: 2, strength: 1, toughness: 1, wounds: 3, initiative: 3, attacks: 3, leadership: 3, intelligence: 3, cool: 3, willPower: 3,
  },
];

export const HUMAN_PROFILES: Profile[] = [
  {
    rollNumber: 35, heroLevel: 0, wizardLevel: 0, description: "Human",
    movement: 4, weaponSkill: 3, ballisticSkill: 3, strength: 3, toughness: 3, wounds: 1, initiative: 3, attacks: 1, leadership: 7, intelligence: 7, cool: 7, willPower: 7,
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
    rollNumber: 83, heroLevel: 0, wizardLevel: 1, description: "Human 5 Wizard",
    movement: 4, weaponSkill: 4, ballisticSkill: 3, strength: 4, toughness: 3, wounds: 1, initiative: 3, attacks: 1, leadership: 7, intelligence: 8, cool: 8, willPower: 8
  },
  {
    rollNumber: 93, heroLevel: 0, wizardLevel: 1, description: "Human 10 Wizard",
    movement: 4, weaponSkill: 4, ballisticSkill: 3, strength: 4, toughness: 3, wounds: 2, initiative: 4, attacks: 1, leadership: 8, intelligence: 9, cool: 8, willPower: 9
  },
  {
    rollNumber: 98, heroLevel: 0, wizardLevel: 2, description: "Human 15 Wizard",
    movement: 4, weaponSkill: 5, ballisticSkill: 3, strength: 4, toughness: 4, wounds: 3, initiative: 4, attacks: 1, leadership: 9, intelligence: 9, cool: 9, willPower: 9
  },
  {
    rollNumber: 99, heroLevel: 0, wizardLevel: 3, description: "Human 20 Wizard",
    movement: 4, weaponSkill: 5, ballisticSkill: 4, strength: 4, toughness: 4, wounds: 4, initiative: 5, attacks: 1, leadership: 9, intelligence: 10, cool: 9, willPower: 10
  },
  {
    rollNumber: 100, heroLevel: 0, wizardLevel: 4, description: "Human 25 Wizard",
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
    rollNumber: 78, heroLevel: 0, wizardLevel: 1, description: "Dwarf 5 Wizard",
    movement: 3, weaponSkill: 5, ballisticSkill: 3, strength: 4, toughness: 4, wounds: 1, initiative: 2, attacks: 1, leadership: 9, intelligence: 8, cool: 10, willPower: 10
  },
  {
    rollNumber: 88, heroLevel: 0, wizardLevel: 1, description: "Dwarf 10 Wizard",
    movement: 3, weaponSkill: 5, ballisticSkill: 3, strength: 4, toughness: 4, wounds: 2, initiative: 3, attacks: 1, leadership: 10, intelligence: 9, cool: 10, willPower: 10
  },
  {
    rollNumber: 93, heroLevel: 0, wizardLevel: 2, description: "Dwarf 15 Wizard",
    movement: 3, weaponSkill: 6, ballisticSkill: 3, strength: 4, toughness: 5, wounds: 3, initiative: 3, attacks: 1, leadership: 10, intelligence: 9, cool: 10, willPower: 10
  },
  {
    rollNumber: 98, heroLevel: 0, wizardLevel: 3, description: "Dwarf 20 Wizard",
    movement: 3, weaponSkill: 6, ballisticSkill: 4, strength: 4, toughness: 5, wounds: 4, initiative: 4, attacks: 1, leadership: 10, intelligence: 10, cool: 10, willPower: 10
  },
  {
    rollNumber: 100, heroLevel: 0, wizardLevel: 4, description: "Dwarf 25 Wizard",
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
    rollNumber: 85, heroLevel: 0, wizardLevel: 1, description: "Elf 5 Wizard",
    movement: 5, weaponSkill: 5, ballisticSkill: 4, strength: 4, toughness: 3, wounds: 1, initiative: 6, attacks: 1, leadership: 8, intelligence: 10, cool: 10, willPower: 9
  },
  {
    rollNumber: 95, heroLevel: 0, wizardLevel: 1, description: "Elf 10 Wizard",
    movement: 5, weaponSkill: 5, ballisticSkill: 4, strength: 4, toughness: 3, wounds: 2, initiative: 7, attacks: 1, leadership: 9, intelligence: 10, cool: 10, willPower: 10
  },
  {
    rollNumber: 98, heroLevel: 0, wizardLevel: 2, description: "Elf 15 Wizard",
    movement: 5, weaponSkill: 6, ballisticSkill: 4, strength: 4, toughness: 4, wounds: 3, initiative: 7, attacks: 1, leadership: 10, intelligence: 10, cool: 10, willPower: 10
  },
  {
    rollNumber: 99, heroLevel: 0, wizardLevel: 3, description: "Elf 20 Wizard",
    movement: 5, weaponSkill: 6, ballisticSkill: 5, strength: 4, toughness: 4, wounds: 4, initiative: 8, attacks: 1, leadership: 10, intelligence: 10, cool: 10, willPower: 10
  },
  {
    rollNumber: 100, heroLevel: 0, wizardLevel: 4, description: "Elf 25 Wizard",
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
  { id: 10, name: "Causes Terror", description: `The mutant causes fear 6"+2/terror in all living creatures. The mutant itself is immune to such effects, except when cauased by Greater Demons or deities.` },
  { id: 11, name: "Hinders Movement", description: `Reduces movement by 1/2" per 'pip' of armor save below 6+. Armor with a save of 5+ = M-0.5", 4+ = M-1", 3+ = M-1.5", etc.` },
  { id: 12, name: "Hinders Spellcasting", description: `Wizards may not regain magic by resting. Spells cost +1 magic point per 'pip' of armor save` },
];

export const MARK_OF_KHORNE: ChaosReward = { name: "Mark of Khorne", description: "Chaos Armor, Lose 1 magic level", rollNumber: 0, specialRules: [], profileBonus: new ProfileBonus() };
export const MARK_OF_SLAANESH: ChaosReward = {
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

export const KHORNE_REWARDS: ChaosReward[] = [
  { rollNumber: 3, name: "Face of Khorne", description: `Causes fear 6" +1/terror in living creatures. Further face changes are applied to followers.`, specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 6, name: "Face of a Bloodthirster", description: `Causes fear in living creatures.`, specialRules: [], profileBonus: new ProfileBonus() },
  {
    rollNumber: 10, name: "Face of a Bloodletter", description: `Gains a poisonous bite. Can spit poinson up to 5". Gains 1 Attack. Champion keeps poisonous attack even if subsequent attributes change face.`, specialRules: [], profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 1,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    } },
  {
    rollNumber: 15, name: "Face of a Fleshhound", description: "Gains a poinsonous bite attack.", specialRules: [], profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 1,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    } },
  {
    rollNumber: 20, name: "Face of a Juggernaught", description: "Can make a Gore Attack. Gains 1 Attack.", specialRules: [], profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 1,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    } },
  { rollNumber: 25, name: "Skin of Khorne", description: "Roll D6: 1-3=Red, 4-5=Black, 6=Brass(T+1). T bonus is lost if skin changes color again.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 28, name: "Collar of Khorne", description: "Subsequent Collars of Khorne can received as Bloodstones or given to followers.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 31, name: "The Hand of Khorne", description: "Weapon attacks by this hand cause D4 wounds. Subsequent rewards increase damage by +1.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 32, name: "Mark of Khorne", description: "Subsequent marks are applied to followers.", specialRules: [], profileBonus: new ProfileBonus() },
  {
    rollNumber: 36, name: "Technology", description: "Int+2 and WS/BS (as appropriate) are raised to one if zero. Roll to determine technology. Subsequent rewards can be kept or gieven to followers.", specialRules: [], profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 0,
      leadership: 0,
      intelligence: 2,
      cool: 0,
      willPower: 0
    } },
  { rollNumber: 40, name: "Poisonous Bite", description: "Champion can use a poisonous bite in place of another attack.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 45, name: "Regeneration", description: "Champion may regenerate at end of turn - even if dead. Roll D6, on 4+ all lost wounds are recovered. If roll fails, mutant cannot regenerate those wounds this battle.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 55, name: "Frenzy", description: "Champion and all current followers are subject to frenzy. Subsequent gifts reduce Cool by 1.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 70, name: "Crossbreed", description: "Merge champion's profile with a Fleshhound. (Add stats together and divide by 2, rounding to nearest whole/half number). Apply 'Face of Fleshhound'. Gains Fleshhound's Leapoing ability if move is 8 or more.", specialRules: [], profileBonus: new ProfileBonus() },
  {
    rollNumber: 80, name: "Personality Loss", description: "", specialRules: [], profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 0,
      leadership: 0,
      intelligence: -2,
      cool: -2,
      willPower: -2
    } },
  {
    rollNumber: 90, name: "Aggression Bonus", description: "", specialRules: [], profileBonus: {
      movement: 0,
      weaponSkill: 1,
      ballisticSkill: 1,
      strength: 1,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 0,
      leadership: 0,
      intelligence: -2,
      cool: -2,
      willPower: -2
    } },
  { rollNumber: 97, name: "Weapon Hand", description: "One attack is always made with bonded weapon hand. Subsequent rolls grant I+1.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 99, name: "Demonic Name", description: "Subsequent rewards make the name longer.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 100, name: "Chaos Attribute", description: "", specialRules: [], profileBonus: new ProfileBonus() },
];

export const SLAANESH_REWARDS: ChaosReward[] = [
  { rollNumber: 3, name: "Face of Slaanesh", description: `Causes fear 6" +1/terror in living creatures. Further face changes are applied to followers.`, specialRules: [], profileBonus: new ProfileBonus() },
  {
    rollNumber: 8, name: "Face of a Keeper of Secrets", description: "Causes fear in living creates. Gains on bite or gore attack.", specialRules: [], profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 1,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    }
},
  { rollNumber: 14, name: "Face of a Demonette", description: "", specialRules: [], profileBonus: new ProfileBonus() },
  {
    rollNumber: 20, name: "Face of a Fiend", description: "Gains Fiend's 'Lick' attack (causes no damage, but successful hit causes stupidity on failed WP test). Lick attack not lost if face is changed. Subsequent rewards are applied to followers.", specialRules: [], profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 1,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    } },
  {
    rollNumber: 25, name: "Face of a Mount of Slaanesh", description: "Gains Mount of Slaanesh 'Ensnaring' attack. Can be combined with Fiend's 'Lick' attack. Subsequent rewards are applied to followers.", specialRules: [], profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 1,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    } },
  { rollNumber: 35, name: "Crablike Claw", description: "Champion must make Claw attacks with crab hands. Subsequent gifts apply to other limbs.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 50, name: "Hermaphrodite", description: "Subsequent rewards are applied to followers.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 55, name: "Ensnaring Tongue", description: "Gains Mount of Slaanesh 'Ensnaring' attack. Can be combined with Fiend's 'Lick' attack. Subsequent rewards are applied to followers.", specialRules: [], profileBonus: new ProfileBonus() },
  {
    rollNumber: 65, name: "Characteristic Gain", description: "WP+1", specialRules: [], profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 0,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 1
    } },
  { rollNumber: 73, name: "Familiar", description: "Champion is granted a permanent chaos familiar. May have up to two familiars if gifted by Slaanesh. Familiars can be given up to 3 Chaos Attributes.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 81, name: "Crossbreed", description: "Merge champion's profile with a Mount of Slaanesh. (Add stats together and divide by 2, rounding to nearest whole/half number). Also apply 'Face of Mount of Slaanesh' to champion", specialRules: [], profileBonus: new ProfileBonus() },
  {
    rollNumber: 86, name: "Horns of Slaanesh", description: "Gains an extra Gore Attack. Subsequent rewards grant another gore attack.", specialRules: [], profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 1,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    } },
  { rollNumber: 91, name: "Musk", description: `Enemy models within 4" must take WP test or move adjacent to champion. Victims are unable to do anything other than stand still, and only one victim can be influenced at a time. Subsequent rewards increase the reant by 1".`, specialRules: [], profileBonus: new ProfileBonus() },
  {
    rollNumber: 96, name: "Razor-edged Tail", description: "Gains +1 Tail attack. Subsequent rewards are applied to followers.", specialRules: [], profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 1,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    } },
  { rollNumber: 97, name: "Mark of Slaanesh", description: "Subsequent rewards are applied to followers.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 98, name: "Demonic Name", description: "Subsequent rewards make the name longer.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 99, name: "Chaos Attribute", description: "", specialRules: [], profileBonus: new ProfileBonus() },
];

export const NURGLE_REWARDS: ChaosReward[] = [
  { rollNumber: 6, name: "Face of Nurgle", description: "Causes fear", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 15, name: "Biting Tongue", description: "Gains S4 Bite Attack with tongue.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 20, name: "Face of a Plaguebearer", description: "Extra gore attack with +2 to hit bonus when charging.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 24, name: "Face of a Beast", description: "Gains Sucker attacks of a Beast of Nurgle", specialRules: [], profileBonus: new ProfileBonus() },
  {
    rollNumber: 30, name: "Immensity", description: "T+1, I-1", specialRules: [], profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 1,
      wounds: 0,
      initiative: -1,
      attacks: 0,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    } },
  { rollNumber: 38, name: "Nurgles Rot", description: "Can pass Nurgle's Rot to others in hand-to-hand. Subsequent rewards are passed on to followers. Unlike champions, followers are affected by the disease.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 44, name: "Horns of Nurgle", description: "", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 49, name: "Plague", description: "Roll D6 to determine afflication. If plague reduces wounds to zero the Champion dies. Can only pass plagues onto followers if receiving the same plague twice.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 57, name: "Hide of Nurgle", description: "Opponents suffer -1 to hit in hand-to-hand.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 63, name: "Crossbreed with Beast", description: "Merge champion's profile with a Beast of Nurgle. (Add stats together and divide by 2, rounding to nearest whole/half number). Apply 'Face of a Beast' rules. Apply 'Trail of Slime' rules.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 71, name: "Nurgling Infestation", description: "Gains +1 S3 Attack. Subsequent gifts grant more attacks.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 78, name: "Familiar", description: "Nurgling Familiar. Roll D100: 1-12: Combat, 12-34: Magic Focus, 35-56: Magic Power, 57-78: Magic Spell, 79-100: Magic Storage. Champion may be gifted with several familiars.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 84, name: "Trail of Slime", description: `Any model directly behind and within 4" risks catching Nurgle's Rot`, specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 93, name: "Rune of Nurgle", description: "Subsequent rewards are applied to followers.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 97, name: "Demonic Name", description: "Subsequent rewards make the name longer.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 100, name: "Chaos Attribute", description: "", specialRules: [], profileBonus: new ProfileBonus() },
];

export const TZEENTCH_REWARDS: ChaosReward[] = [
  { rollNumber: 6, name: "Face of Tzeentch", description: "FP+1", specialRules: [], profileBonus: new ProfileBonus() },
  {
    rollNumber: 15, name: "Face of a Lord of Change", description: "FP+1, +1 Bite Attack", specialRules: [], profileBonus: {
      movement: 0,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      initiative: 0,
      attacks: 1,
      leadership: 0,
      intelligence: 0,
      cool: 0,
      willPower: 0
    }
},
  { rollNumber: 22, name: "Face of a Horror", description: "", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 27, name: "Elastic Duplication", description: "If Champion is slain, he divides into two Blue Horrors which battle for D6 turns.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 33, name: "Hand of Tzeentch", description: "Hand can only be used for a Claw attack. Can only pass onto followers if all hands have become hands of Tzeentch.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 39, name: "Flaming Arm", description: `Arm can only be used to make a single Bite Attack. In addition the hand can shoot fire or burn an opponent in hand-to-hand. Shooting flame has D6" range, both attacks cause D6 S3 hits. Units wounded by flames must take rout test`, specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 44, name: "The Gift of Magic", description: "Champion gains 1 magic level (and associated spells) and 3D6 magic points.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 50, name: "Reckoning of Tzeentch", description: "For each stat, roll a D6: 1-3=subtract 1, 4-6=add 1. If wounds drop to zero the Champion is killed. If Ld/Cl/Int/Wp are reduced to 0 the Champion becomes a Chaos Spawn.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 54, name: "Crossbreed with Flamer", description: "Merge champion's profile with a Flamer. (Add stats together and divide by 2, rounding to nearest whole/half number)", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 58, name: "Magic of Tzeentch", description: "Roll D100: 1-25: Globe of Change, 26-75: Cordial of Tzeentch, 76-90: Warpstone Charm, 91-100: Rod of Tzeenth. This magic item can only be used by the Champion, it cannot be passed on to a follower.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 62, name: "Familiar", description: "Familiar. Roll D100: 1-12: Combat, 12-34: Magic Focus, 35-56: Magic Power, 57-78: Magic Spell, 79-100: Magic Storage. Champion may be gifted with several familiars.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 69, name: "Wings", description: `Gains feathered wings. MinSpeed:0", MaxSpeed:32", Acc/Dec: 8"`, specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 77, name: "Changing of the Ways", description: "All current attributes are Re-Rolled. Current profile modifications are kept, but new attribute modifications are applied as well. Cannot be passed onto a follower.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 84, name: "Withering Gaze", description: "Opponents in hand-to-hand must pass a Cool test or suffer -1 to hit.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 93, name: "Rune of Tzeentch", description: "Subsequent rewards are applied to followers.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 97, name: "Demonic Name", description: "Subsequent rewards make the name longer.", specialRules: [], profileBonus: new ProfileBonus() },
  { rollNumber: 100, name: "Chaos Attributes", description: "Champion is given D3 Chaos Attributes", specialRules: [], profileBonus: new ProfileBonus() },
];

export const CHAOS_ARMOR: Armor = {
  name: "Chaos Armor", reducesMovement: false, armorSaveModifier: 3, cost: 50, specialRules: [SPECIAL_RULES[5]]
}

export const ARMOR_TYPES: Armor[] = [
  { name: "Shield", reducesMovement: true, armorSaveModifier: 1, cost: 1, specialRules: [SPECIAL_RULES[11],SPECIAL_RULES[12]]},
  { name: "Light Armor", reducesMovement: true, armorSaveModifier: 1, cost: 2, specialRules: [SPECIAL_RULES[11], SPECIAL_RULES[12]] },
  { name: "Heavy Armor", reducesMovement: true, armorSaveModifier: 2, cost: 3, specialRules: [SPECIAL_RULES[11], SPECIAL_RULES[12]] },
  { name: "Riding Animal Barding", reducesMovement: true, armorSaveModifier: 1, cost: 4, specialRules: [SPECIAL_RULES[11], SPECIAL_RULES[12]] },
  CHAOS_ARMOR
]

export const WEAPON_TYPES: Weapon[] = [
  { name: "Hand Weapon", strengthBonus: 0, attackBonus: 0, initiativeBonus: 0, range: 0, armorSaveModifier: 0, cost: 1, specialRules: [] },
  { name: "Double-handed Weapon", strengthBonus: 1, attackBonus: 0, initiativeBonus: -1, range: 0, armorSaveModifier: -1, cost: 2, specialRules: [SPECIAL_RULES[0]] },
  { name: "Flail", strengthBonus: 1, attackBonus: 0, initiativeBonus: 0, range: 0, armorSaveModifier: 0, cost: 2, specialRules: [SPECIAL_RULES[0], SPECIAL_RULES[1]] },
  { name: "Halberd", strengthBonus: 1, attackBonus: 0, initiativeBonus: 0, range: 0, armorSaveModifier: 0, cost: 2, specialRules: [SPECIAL_RULES[0], SPECIAL_RULES[2], SPECIAL_RULES[3]] },
  { name: "Lance", strengthBonus: 2, attackBonus: 0, initiativeBonus: 2, range: 0, armorSaveModifier: -1, cost: 2, specialRules: [] },
  { name: "Spear", strengthBonus: 0, attackBonus: 0, initiativeBonus: 0, range: 0, armorSaveModifier: 0, cost: 1, specialRules: [SPECIAL_RULES[2], SPECIAL_RULES[3], SPECIAL_RULES[4]] },
  { name: "Bow", strengthBonus: 0, attackBonus: 0, initiativeBonus: 0, range: 24, armorSaveModifier: 0, cost: 2, specialRules: [] },
  { name: "Short Bow", strengthBonus: 0, attackBonus: 0, initiativeBonus: 0, range: 0, armorSaveModifier: 0, cost: 1, specialRules: [] },
  { name: "Long Bow", strengthBonus: 0, attackBonus: 0, initiativeBonus: 0, range: 0, armorSaveModifier: 0, cost: 3, specialRules: [] },
  { name: "Crossbow", strengthBonus: 0, attackBonus: 0, initiativeBonus: 0, range: 0, armorSaveModifier: 0, cost: 3, specialRules: [] },
  { name: "Javelin", strengthBonus: 0, attackBonus: 0, initiativeBonus: 0, range: 8, armorSaveModifier: 0, cost: 1, specialRules: [] },
  { name: "Throwing Knife", strengthBonus: 0, attackBonus: 0, initiativeBonus: 0, range: 6, armorSaveModifier: 0, cost: 1, specialRules: [] },
  { name: "Repeating Crossbow", strengthBonus: 0, attackBonus: 0, initiativeBonus: 0, range: 16, armorSaveModifier: 0, cost: 4, specialRules: [] },
  { name: "Random Magic Item", strengthBonus: 0, attackBonus: 0, initiativeBonus: 0, range: 0, armorSaveModifier: 0, cost: 6, specialRules: [] },
]




