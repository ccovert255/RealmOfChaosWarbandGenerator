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
import { Warband, Champion, Profile, Weapon, Armor, ChaosAttribute } from '../shared/models';
import { WarbandsListService } from '../warbands-list.service';
import { getRandomIntInclusive } from '../shared/functions';
import { HERO_BONUS_PROFILES, PERSONAL_ATTRIBUTES, OTHER_PROFILES, HUMAN_PROFILES, DWARF_PROFILES, DARKELF_PROFILES, ARMOR_TYPES, WEAPON_TYPES } from '../shared/constants';
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
  selector: 'app-attribute-add-dialog',
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
  templateUrl: './attribute-add-dialog.component.html',
  styleUrl: './attribute-add-dialog.component.scss'
})
export class AttributeAddDialogComponent {

  attributesList: ChaosAttribute[] = [];
  selectedAttribute: ChaosAttribute | null = null;

  attributeAffectsProfile(): boolean {

    if (this.selectedAttribute === null) return false;

    if (this.selectedAttribute.profileBonus.movement != 0) return true;
    if (this.selectedAttribute.profileBonus.weaponSkill != 0) return true;
    if (this.selectedAttribute.profileBonus.ballisticSkill != 0) return true;
    if (this.selectedAttribute.profileBonus.strength != 0) return true;
    if (this.selectedAttribute.profileBonus.toughness != 0) return true;
    if (this.selectedAttribute.profileBonus.wounds != 0) return true;
    if (this.selectedAttribute.profileBonus.initiative != 0) return true;
    if (this.selectedAttribute.profileBonus.attacks != 0) return true;
    if (this.selectedAttribute.profileBonus.leadership != 0) return true;
    if (this.selectedAttribute.profileBonus.cool != 0) return true;
    if (this.selectedAttribute.profileBonus.intelligence != 0) return true;
    if (this.selectedAttribute.profileBonus.willPower != 0) return true;

    return false;
  }

  profileStatDisplay(stat: number | undefined): string {
    if (stat == undefined) return '';
    if (stat > 0) return `+${stat}`;
    if (stat < 0) return `${stat}`;
    return '';
  }


  constructor(public dialogRef: MatDialogRef<AttributeAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Warband,
    public warbandsListService: WarbandsListService,
    public alertService: AlertService) {
    dialogRef.disableClose = true;

    PERSONAL_ATTRIBUTES.forEach(attr => this.attributesList.push(Object.assign({}, attr)));
  }

  onAdd(): void {

    if (this.selectedAttribute != null) {
      this.data.champion.attributes.push(this.selectedAttribute);
      this.dialogRef.close();
    }
  }

}
