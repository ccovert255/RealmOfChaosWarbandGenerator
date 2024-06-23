import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogConfig,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Warband, Champion, Profile, Weapon, Armor, ChaosAttribute, ChaosReward } from '../shared/models';
import { WarbandsListService } from '../warbands-list.service';
import { getRandomIntInclusive } from '../shared/functions';
import { HERO_BONUS_PROFILES, PERSONAL_ATTRIBUTES, OTHER_PROFILES, HUMAN_PROFILES, DWARF_PROFILES, DARKELF_PROFILES, ARMOR_TYPES, WEAPON_TYPES, STANDARD_REWARDS, KHORNE_REWARDS, SLAANESH_REWARDS, NURGLE_REWARDS, TZEENTCH_REWARDS } from '../shared/constants';
import { ChaosPatron, Race } from '../shared/enums';
import { ProfileComponent } from '../profile/profile.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CreateWarbandRequest, WarbandService } from '../warband.service';
import { AlertService } from '../alert.service';
import { EnumSelectPipe } from '../enum.pipe'
import { CommonModule } from '@angular/common';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-reward-add-dialog',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ProfileComponent,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule, EnumSelectPipe, CommonModule, MatCheckbox],
  templateUrl: './reward-add-dialog.component.html',
  styleUrl: './reward-add-dialog.component.scss'
})
export class RewardAddDialogComponent {

  rewardsList: ChaosReward[] = [];
  selectedReward: ChaosReward | null = null;

  constructor(public dialogRef: MatDialogRef<RewardAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Warband) {
    dialogRef.disableClose = true;

    STANDARD_REWARDS.forEach(r => this.rewardsList.push(Object.assign({}, r)));
  }

  profileStatDisplay(stat: number | undefined): string {
    if (stat == undefined) return '';
    if (stat > 0) return `+${stat}`;
    if (stat < 0) return `${stat}`;
    return '';
  }

  rewardAffectsProfile(): boolean {

    if (this.selectedReward === null) return false;

    if (this.selectedReward.profileBonus.movement != 0) return true;
    if (this.selectedReward.profileBonus.weaponSkill != 0) return true;
    if (this.selectedReward.profileBonus.ballisticSkill != 0) return true;
    if (this.selectedReward.profileBonus.strength != 0) return true;
    if (this.selectedReward.profileBonus.toughness != 0) return true;
    if (this.selectedReward.profileBonus.wounds != 0) return true;
    if (this.selectedReward.profileBonus.initiative != 0) return true;
    if (this.selectedReward.profileBonus.attacks != 0) return true;
    if (this.selectedReward.profileBonus.leadership != 0) return true;
    if (this.selectedReward.profileBonus.cool != 0) return true;
    if (this.selectedReward.profileBonus.intelligence != 0) return true;
    if (this.selectedReward.profileBonus.willPower != 0) return true;

    return false;
  }

  onAdd(): void {

    if (this.selectedReward != null) {
      this.data.champion.rewards.push(this.selectedReward);
      this.dialogRef.close();
    }
  }

}
