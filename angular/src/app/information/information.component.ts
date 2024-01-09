// information.component.ts
import { Component, OnInit } from '@angular/core';
import { RobotCuisine } from '../models/robot-cuisine.model';
import { RobotCuisineService } from '../services/robot-cuisine.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  robotsCuisine!: RobotCuisine[];

  constructor(private robotCuisineService: RobotCuisineService) {}

  ngOnInit() {
    this.robotsCuisine = this.robotCuisineService.getRobotsCuisine();
  }
}
