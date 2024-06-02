import { Component } from '@angular/core';
import { Warband, Profile, Weapon, Armor, ChaosAttribute } from '../shared/models';
import { getRandomIntInclusive } from '../shared/functions';
import { PERSONAL_ATTRIBUTES } from '../shared/constants';
import { ChaosGod } from '../shared/enums';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-warbands',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './warbands.component.html',
  styleUrl: './warbands.component.scss'
})
export class WarbandsComponent {
  warband: Warband = {
    championName: "Skullsmasher",
    chaosGod: ChaosGod.Khorne,
    seed: "123",
    profile: new Profile(),
    equipmentPoints: 6
  };
}
