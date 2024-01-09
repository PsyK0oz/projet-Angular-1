// formulaire.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  recipeForm!: FormGroup;
  previewImage!: string;

  constructor(private formBuilder: FormBuilder, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.recipeForm = this.formBuilder.group({
      title: ['', Validators.required],
      ingredients: ['', Validators.required],
      instructions: ['', Validators.required],
      image: ['', Validators.required]
    });

    this.recipeForm.valueChanges.subscribe((recipe: Recipe) => {
      this.previewImage = recipe.image;
    });
  }

  onSubmitForm() {
    const formValue = this.recipeForm.value;
    const newRecipe: Recipe = {
      title: formValue['title'],
      ingredients: formValue['ingredients'],
      instructions: formValue['instructions'],
      image: formValue['image']
    };
    this.recipeService.addRecipe(newRecipe);
    this.recipeForm.reset();
  }
}
