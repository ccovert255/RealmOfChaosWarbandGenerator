import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Warband, Champion, Profile, Weapon, Armor, ChaosAttribute } from '../shared/models';
import { MatIconModule } from '@angular/material/icon';
import { WarbandEditDialogComponent } from '../warband-edit-dialog/warband-edit-dialog.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

const WARBANDS_LIST_KEY: string = "warbands-list";

@Component({
  selector: 'app-warbands-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatIconModule],
  templateUrl: './warbands-list.component.html',
  styleUrl: './warbands-list.component.scss'
})
export class WarbandsListComponent {
  displayedColumns: string[] = ['name', 'patron', 'profile', 'seed', 'action'];
  warbandsList: Warband[] = [];

  @ViewChild(MatTable) table: MatTable<Warband> | undefined;

  constructor(public dialog: MatDialog) {

    //load data from local storage
    let warbandListJson = localStorage.getItem(WARBANDS_LIST_KEY);

    if (warbandListJson != null) {
      try {
        this.warbandsList = [];

        let warbandListData = JSON.parse(warbandListJson);

        warbandListData.forEach((json:any) => {

          //TODO: cast json to Warband class
          let castedWarband = json as Warband;
          let castedChampion = json.champion as Champion;
          let castedProfile = json.champion.profile as Profile;

          let warband = new Warband();
          warband.copyValues(castedWarband);

          this.warbandsList.push(warband);

        });

        console.log(this.warbandsList);

      } catch (e) {
        this.warbandsList = [];
      }
    }

  }

  addData() {
    let warband = new Warband();
    warband.name = 'test';
    warband.seed = 'test';
    this.warbandsList.push(warband);

    localStorage.setItem(WARBANDS_LIST_KEY, JSON.stringify(this.warbandsList));

    this.table?.renderRows();
  }

  editWarband(warband: Warband): void {
    //TODO: show warband editor component in dialog
    const dialogRef = this.dialog.open(WarbandEditDialogComponent, { data: warband});

    dialogRef.afterClosed().subscribe(result => {
      //TODO: reload grid rows necessary?
    });
  }

}
