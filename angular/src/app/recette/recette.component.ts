// recette.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { RecipeDialogComponent } from '../recipe-dialog/recipe-dialog.component';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {
  recipes!: Recipe[];

  constructor(private recipeService: RecipeService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  openRecipe(recipe: Recipe): void {
    this.dialog.open(RecipeDialogComponent, {
      data: recipe
    });
  }
}
