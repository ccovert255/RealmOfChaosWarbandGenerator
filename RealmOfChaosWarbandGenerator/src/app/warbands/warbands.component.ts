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
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CreateWarbandRequest, WarbandService } from '../warband.service';

@Component({
  selector: 'app-warbands',
  standalone: true,
  imports: [ProfileComponent, FormsModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatSelectModule, MatDividerModule, MatListModule],
  templateUrl: './warbands.component.html',
  styleUrl: './warbands.component.scss'
})
export class WarbandsComponent {
  createWarbandRequest: CreateWarbandRequest = new CreateWarbandRequest();
  warband?: Warband;
  onCreateWarband(): void {
    console.log(this.createWarbandRequest.championName);
    this.warband = this.warbandService.createWarband(this.createWarbandRequest);
  }
  constructor(private warbandService: WarbandService) { }
}


