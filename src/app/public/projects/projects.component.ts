import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { PowerHourComponent } from './power-hour/power-hour.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PowerHourComponent, {
      width: '1050px'
    });
  }
}
