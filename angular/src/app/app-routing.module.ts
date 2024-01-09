import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { RecetteComponent } from './recette/recette.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
  { path: '', component: AccueilComponent, pathMatch: 'full' }, // Route d'accueil
  { path: 'formulaire', component: FormulaireComponent }, // Route du formulaire
  { path: 'contact', component: ContactComponent },
  { path: 'recette', component: RecetteComponent }, 
  { path: 'information', component: InformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
