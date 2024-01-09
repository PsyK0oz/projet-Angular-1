// information.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RobotCuisine } from '../models/robot-cuisine.model';
import { RobotCuisineService } from '../services/robot-cuisine.service';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  robotsCuisine!: RobotCuisine[];

  constructor(private robotCuisineService: RobotCuisineService, public dialog: MatDialog) {}

  ngOnInit() {
    this.robotsCuisine = this.robotCuisineService.getRobotsCuisine();
  }

  openImageDialog(imageUrl: string): void {
    this.dialog.open(ImageDialogComponent, {
      data: {imageUrl: imageUrl}
    });
  }
}
