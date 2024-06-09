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

@Component({
  selector: 'app-warband-edit-dialog',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,],
  templateUrl: './warband-edit-dialog.component.html',
  styleUrl: './warband-edit-dialog.component.scss'
})
export class WarbandEditDialogComponent {

  constructor(public dialogRef: MatDialogRef<WarbandEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Warband,
    public warbandsListService: WarbandsListService)
  {
  }

  onDelete(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close();
  }

}
