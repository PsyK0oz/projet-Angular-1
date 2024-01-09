// robot-cuisine.service.ts
import { Injectable } from '@angular/core';
import { RobotCuisine } from '../models/robot-cuisine.model';

@Injectable({
  providedIn: 'root'
})
export class RobotCuisineService {
  getRobotsCuisine(): RobotCuisine[] {
    return [
        new RobotCuisine(1, 'RobotChef Pro', 4.8, '../assets/robot1.png'),
        new RobotCuisine(2, 'Cuisinier Automatique', 4.6, '../assets/robot2.png'),
        new RobotCuisine(3, 'CuisineRapid X1', 4.7, '../assets/robot3.png'),
        new RobotCuisine(4, 'ProCuisine 3000', 4.5, '../assets/robot4.png'),
        new RobotCuisine(5, 'AutoChef Deluxe', 4.6, '../assets/robot5.png'),
    ];
  }
}
