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
import { WarbandsListService } from '../warbands-list.service';

@Component({
  selector: 'app-warband-generator',
  standalone: true,
  imports: [ProfileComponent,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose],
  templateUrl: './warband-generator.component.html',
  styleUrl: './warband-generator.component.scss'
})
export class WarbandGeneratorComponent {
  createWarbandRequest: CreateWarbandRequest = new CreateWarbandRequest();
  warband?: Warband;
  constructor(public dialogRef: MatDialogRef<WarbandGeneratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Warband,
    public warbandsListService: WarbandsListService,
    public warbandService: WarbandService) {
    dialogRef.disableClose = true;
  }

  onCreateWarband(): void {
    console.log(this.createWarbandRequest.championName);
    this.warband = this.warbandService.createWarband(this.createWarbandRequest);
  }



  onSave(): void {
    console.log
    if (this.warband?.champion?.profile == null) return;
    this.warbandsListService.saveWarband(this.warband);
    this.dialogRef.close();
  }


}

