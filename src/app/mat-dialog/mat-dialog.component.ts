import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';
import { PicsComponent } from '../pics-component/pics-component';
import { PicsModel } from '../pics-component/pics-model';
import { MatDialogService } from './mat-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.css']
})
export class MatDialogComponent {
  title = 'MatDialogComponentClient';
  picModel = new PicsModel();
  picsList = new Array<PicsModel>();
  loader:boolean = false;

  constructor(public dialogRef: MatDialogRef<MatDialogComponent>,private _snackBar: MatSnackBar, private matDialogService: MatDialogService) {}


  ngOnInit() { }

  uploadImage() {
    this.loader=true;
    console.log("uploadImage method calling");
    if (this.picModel.Name != null && this.picModel.File != null) {      
      this.matDialogService.uploadPics(this.picModel).subscribe(res => {
        console.log(res);
        this.dialogRef.close({
          cancelled: true
        });
        this.loader=false;
      }, err => {
        console.log(err);
        this.dialogRef.close({
          cancelled: false
        });
        this.loader=false;
      });
    }   
    else {
      this._snackBar.open("Choose Photo Mandatory!","", {
        duration: 3000,
      });
      this.loader=false;
    } 
    
  }

  closeDialog() {
    this.dialogRef.close({
      cancelled: false
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.picModel.File = event.target.files[0];
    }
  }

}
