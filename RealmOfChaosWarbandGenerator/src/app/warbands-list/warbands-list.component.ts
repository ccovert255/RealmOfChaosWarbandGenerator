import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Warband, Champion, Profile, Weapon, Armor, ChaosAttribute } from '../shared/models';
import { MatIconModule } from '@angular/material/icon';
import { WarbandEditDialogComponent } from '../warband-edit-dialog/warband-edit-dialog.component';
import { WarbandsListService } from '../warbands-list.service';
import { Guid } from 'guid-typescript';
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
import { WarbandGeneratorComponent } from '../warband-generator/warband-generator.component';

const WARBANDS_LIST_KEY: string = "warbands-list";

@Component({
  selector: 'app-warbands-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatIconModule],
  templateUrl: './warbands-list.component.html',
  styleUrl: './warbands-list.component.scss'
})
export class WarbandsListComponent {
  displayedColumns: string[] = ['name', 'patron', 'race', 'seed'];
  warbandsList: Warband[] = [];

  @ViewChild(MatTable) table: MatTable<Warband> | undefined;

  constructor(public dialog: MatDialog, public warbandsListService: WarbandsListService) {
    this.warbandsList = warbandsListService.getWarbands();
  }

  createWarband() {
    const dialogRef = this.dialog.open(WarbandGeneratorComponent, { width: "90vw", maxWidth: "90vw", maxHeight: "90vh", });
    dialogRef.afterClosed().subscribe(result => {
      this.warbandsList = this.warbandsListService.getWarbands();
    });
  }

  editWarband(id: string): void {
    let warband = this.warbandsListService.getWarband(id);

    console.log(warband);
    if (warband == null) {
      //TODO: show 404 popup
      return;
    }

    const dialogRef = this.dialog.open(WarbandEditDialogComponent, { data: warband, width: "90vw", maxWidth: "90vw", maxHeight: "90vh", });
    dialogRef.afterClosed().subscribe(result => {
      this.warbandsList = this.warbandsListService.getWarbands();
    });
  }

}
