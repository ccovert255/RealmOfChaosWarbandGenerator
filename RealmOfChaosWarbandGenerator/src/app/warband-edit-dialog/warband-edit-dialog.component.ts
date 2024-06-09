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
import { Guid } from 'guid-typescript';
import { getRandomIntInclusive } from '../shared/functions';
import { PERSONAL_ATTRIBUTES } from '../shared/constants';
import { ChaosPatron, Race } from '../shared/enums';
import { ProfileComponent } from '../profile/profile.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CreateWarbandRequest, WarbandService } from '../warband.service';
import { AlertService } from '../alert.service';

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
    MatListModule],
  templateUrl: './warband-edit-dialog.component.html',
  styleUrl: './warband-edit-dialog.component.scss'
})
export class WarbandEditDialogComponent {

  constructor(public dialogRef: MatDialogRef<WarbandEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Warband,
    public warbandsListService: WarbandsListService,
    public alertService: AlertService)
  {
    dialogRef.disableClose = true;
  }

  onDelete(): void {
    this.alertService.confirm("You sure Bro?", this.onConfirmedDelete, function () { });
  }

  onConfirmedDelete(): void {
    this.warbandsListService.deleteWarband(this.data.id);
    this.dialogRef.close();
  }

  onSave(): void {
    this.warbandsListService.saveWarband(this.data);
    this.dialogRef.close();
  }

}
