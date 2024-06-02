import { Component } from '@angular/core';
import { Warband, Profile, Weapon, Armor, ChaosAttribute } from '../shared/models';
import { getRandomIntInclusive } from '../shared/functions';
import { PERSONAL_ATTRIBUTES } from '../shared/constants';
import { ChaosPatron, Race } from '../shared/enums';
import { ProfileComponent } from '../profile/profile.component';

import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDivider, MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-warbands',
  standalone: true,
  imports: [ProfileComponent, FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './warbands.component.html',
  styleUrl: './warbands.component.scss'
})
export class WarbandsComponent {
  warband: Warband = new Warband();
}


