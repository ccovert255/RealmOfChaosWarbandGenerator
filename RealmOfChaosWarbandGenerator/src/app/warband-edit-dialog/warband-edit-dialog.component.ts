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
import { ArmorAddDialogComponent } from '../armor-add-dialog/armor-add-dialog.component';

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

  constructor(public dialogRef: MatDialogRef<WarbandEditDialogComponent>,
    public dialogAddArmorRef: MatDialog,
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

    let warband = this.warbandsListService.getWarband(this.data.id);

    console.log(warband);
    if (warband == null) {
      //TODO: show 404 popup
      return;
    }

    const armorDialogRef = this.dialogAddArmorRef.open(ArmorAddDialogComponent, { data: warband });
    //armorDialogRef.afterClosed().subscribe(result => {
    //  this.warbandsList = this.warbandsListService.getWarbands();
    //});

  }
}



