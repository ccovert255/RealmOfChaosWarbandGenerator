import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Warband, Champion, Profile, Weapon, Armor, ChaosAttribute, RuleDescription, ChaosReward } from '../shared/models';
import { WarbandsListService } from '../warbands-list.service';
import { getRandomIntInclusive } from '../shared/functions';
import { HERO_BONUS_PROFILES, PERSONAL_ATTRIBUTES, OTHER_PROFILES, HUMAN_PROFILES, DWARF_PROFILES, DARKELF_PROFILES } from '../shared/constants';
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
import { ArmorAddDialogComponent } from '../armor-add-dialog/armor-add-dialog.component';
import { WeaponAddDialogComponent } from '../weapon-add-dialog/weapon-add-dialog.component';
import { AttributeAddDialogComponent } from '../attribute-add-dialog/attribute-add-dialog.component';
import { RewardAddDialogComponent } from '../reward-add-dialog/reward-add-dialog.component';

@Component({
  selector: 'app-warband-edit-dialog',
  standalone: true,
  providers: [AlertService],
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
    MatListModule, EnumSelectPipe, CommonModule],
  templateUrl: './warband-edit-dialog.component.html',
  styleUrl: './warband-edit-dialog.component.scss'
})
export class WarbandEditDialogComponent {

  bonusLevels: Profile[] = HERO_BONUS_PROFILES;

  raceProfiles: Profile[] = [
    HUMAN_PROFILES[0],
    DWARF_PROFILES[0],
    DARKELF_PROFILES[0],
  ];

  raceTypes = Object.values(Race).filter(r => typeof r === 'string').map((key, value) => { return { id: value, name: key }; });

  patronTypes = Object.values(ChaosPatron).filter(r => typeof r === 'string').map((key, value) => { return { id: value, name: key }; });

  public compareProfiles = function (option: Profile, value: Profile): boolean {
    return option.rollNumber === value.rollNumber;
  }

  public displaySpecialRuleNames = function (rules : RuleDescription[]) : string {
    return rules.map(r => r.name).join(', ');
  }

  constructor(public dialogRef: MatDialogRef<WarbandEditDialogComponent>,
    public dialogAddItemRef: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Warband,
    public warbandsListService: WarbandsListService,
    public alertService: AlertService)
  {
    dialogRef.disableClose = true;

    OTHER_PROFILES.forEach(r => this.raceProfiles.push(Object.assign({}, r)));

  }

  onDelete(): void {
    this.warbandsListService.deleteWarband(this.data.id);
    this.dialogRef.close();
  }

  onSave(): void {
    this.warbandsListService.saveWarband(this.data);
    this.dialogRef.close();
  }

  addArmor(): void {
    this.dialogAddItemRef.open(ArmorAddDialogComponent, { data: this.data });
  }

  deleteArmor(armor: Armor): void {
    let index = this.data.champion.armor.indexOf(armor);
    if (index !== -1) {
      this.data.champion.armor.splice(index, 1);
    }
  }

  addWeapon(): void {
    this.dialogAddItemRef.open(WeaponAddDialogComponent, { data: this.data, width: "50vw", maxWidth: "90vw", height: "40vw", maxHeight: "90vh", });
  }

  deleteWeapon(weapon: Weapon): void {
    let index = this.data.champion.weapons.indexOf(weapon);
    if (index !== -1) {
      this.data.champion.weapons.splice(index, 1);
    }
  }

  addAttribute(): void {
    this.dialogAddItemRef.open(AttributeAddDialogComponent, { data: this.data, width: "50vw", maxWidth: "90vw", height: "40vw", maxHeight: "90vh", });
  }

  deleteAttribute(attribute: ChaosAttribute): void {
    let index = this.data.champion.attributes.indexOf(attribute);
    if (index !== -1) {
      this.data.champion.attributes.splice(index, 1);
    }
  }

  addReward(): void {
    this.dialogAddItemRef.open(RewardAddDialogComponent, { data: this.data, width: "50vw", maxWidth: "90vw", height: "40vw", maxHeight: "90vh", });
  }

  deleteReward(reward: ChaosReward): void {
    let index = this.data.champion.rewards.indexOf(reward);
    if (index !== -1) {
      this.data.champion.rewards.splice(index, 1);
    }
  }

}



