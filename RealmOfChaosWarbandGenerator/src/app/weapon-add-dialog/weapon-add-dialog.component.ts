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
  selector: 'app-weapon-add-dialog',
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
  templateUrl: './weapon-add-dialog.component.html',
  styleUrl: './weapon-add-dialog.component.scss'
})
export class WeaponAddDialogComponent {

  weaponList: Weapon[] = [];
  selectedWeapon: Weapon | null = null;

  strengthDisplay(): string {
    if (this.selectedWeapon === null) return '';
    if (this.selectedWeapon.strength != null) return `${this.selectedWeapon.strength}`;
    if (this.selectedWeapon.strengthBonus == 0) return `user`;
    return `+${this.selectedWeapon.strengthBonus}`;
  }

  rangeDisplay(): string {
    if (this.selectedWeapon == null) return '';
    if (this.selectedWeapon.range > 0) return `${this.selectedWeapon.range}"`;
    return '-';
  }

  constructor(public dialogRef: MatDialogRef<WeaponAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Warband,
    public warbandsListService: WarbandsListService,
    public alertService: AlertService) {
    dialogRef.disableClose = true;

    WEAPON_TYPES.forEach(w => this.weaponList.push(Object.assign({}, w)));
  }

  onAdd(): void {

    if (this.selectedWeapon != null) {
      this.data.champion.weapons.push(this.selectedWeapon);
      this.dialogRef.close();
    }
  }

}
