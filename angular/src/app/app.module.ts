import { NgModule } from '@angular/core';
import { BrowserModule,HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CarrouselComponent } from './accueil/carrousel/carrousel.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { ContactChildComponent } from './contact/contact-child/contact-child.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import { RecetteComponent } from './recette/recette.component';
import { StarRatingPipe } from './shares/star-rating.pipe';
import { StarImagePipe } from './shares/star-image.pipe';
import { RecipeDialogComponent } from './recipe-dialog/recipe-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CarrouselComponent,
    FormulaireComponent,
    ContactComponent,
    ContactChildComponent,
    ContactDetailComponent,
    RecetteComponent,
    StarRatingPipe,
    StarImagePipe,
    RecipeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HammerModule,
    MatDialogModule 
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
