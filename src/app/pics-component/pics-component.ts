import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from '../mat-dialog/mat-dialog.component';
import { PicsModel } from './pics-model';
import { PicsService } from './pics-service';

@Component({
  selector: 'app-pics-component',
  templateUrl: './pics-component.html',
  styleUrls: ['./pics-component.css']
})
export class PicsComponent implements OnInit {

  picsList = [];
  searchvalue: string = '';
  sortOrder: string = 'd';

  constructor(public dialog: MatDialog, private picService: PicsService) { }

  ngOnInit(): void {
    this.refresh();
  }

  sortDates = [
    { sortType: 'Asc', icon: 'keyboard_arrow_up', value: 'd' },
    { sortType: 'Desc', icon: 'keyboard_arrow_down', value: '-d' }]

  openDialog() {
    const dialogRef = this.dialog.open(MatDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res.cancelled) {
        this.refresh();
      }
    })
  }

  refresh() {
    this.picService.getPics(this.sortOrder, this.searchvalue).subscribe(res => {
      this.picsList = res;
    }, err => {
      console.log(err);
    });
  }
}
