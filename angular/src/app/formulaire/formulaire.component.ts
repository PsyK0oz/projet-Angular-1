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
  previewTitle = '';
  previewIngredients = '';
  previewInstructions = '';
  previewImage = '';

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

    const titleControl = this.recipeForm.get('title');
    if (titleControl) {
      titleControl.valueChanges.subscribe(title => this.previewTitle = title);
    }

    const ingredientsControl = this.recipeForm.get('ingredients');
    if (ingredientsControl) {
      ingredientsControl.valueChanges.subscribe(ingredients => this.previewIngredients = ingredients);
    }

    const instructionsControl = this.recipeForm.get('instructions');
    if (instructionsControl) {
      instructionsControl.valueChanges.subscribe(instructions => this.previewInstructions = instructions);
    }

    const imageControl = this.recipeForm.get('image');
    if (imageControl) {
      imageControl.valueChanges.subscribe(image => this.previewImage = image);
    }
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
  handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files.length > 0) {
      const file = target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          this.previewImage = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

}
