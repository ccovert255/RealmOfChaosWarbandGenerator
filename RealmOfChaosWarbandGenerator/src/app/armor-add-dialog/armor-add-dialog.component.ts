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

@Component({
  selector: 'app-armor-add-dialog',
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
    MatListModule, EnumSelectPipe, CommonModule],
  templateUrl: './armor-add-dialog.component.html',
  styleUrl: './armor-add-dialog.component.scss'
})
export class ArmorAddDialogComponent {

  armorList: Armor[] = [];

  constructor(public dialogRef: MatDialogRef<ArmorAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Warband,
    public warbandsListService: WarbandsListService,
    public alertService: AlertService) {
    dialogRef.disableClose = true;

    //OTHER_PROFILES.forEach(r => this.raceProfiles.push(Object.assign({}, r)));

  }

  onAdd(): void {
    this.warbandsListService.saveWarband(this.data);
    this.dialogRef.close();
  }

}
