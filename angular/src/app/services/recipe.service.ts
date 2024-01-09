// recipe.service.ts
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      title: 'Salade de carrotes',
      ingredients: 'Carottes, Citron, Huile d’olive, Sel et poivre, Oignon blanc',
      instructions: 'Épluchez les carottes et râpez-les finement. Pressez un citron et assaisonnez les carottes avec le jus. Ajoutez de l’huile d’olive, du sel et du poivre.Épluchez et hachez finement un petit oignon blanc. Mélangez bien et servez très frais',
      image: './assets/image1.png',
      rating: 5,
    },
    {
      title: 'Dinde avec salade de pommes de terre et carottes',
      ingredients: 'Viande de dinde, Carottes, Pommes de terre, Oignon, Beurre, Farine, Bouillon de volaille, Champignons, Crème fraîche',
      instructions: 'Coupez la viande en cubes, pelez et coupez les carottes en rondelles. Pelez et coupez les pommes de terre en gros cubes. Faites revenir l’oignon dans une sauteuse avec du beurre, ajoutez les cubes de viande et faites légèrement dorer. Saupoudrez de farine, mélangez bien et versez le bouillon de volaille. Ajoutez les carottes, les pommes de terre et les champignons, remuez jusqu’à ce que la sauce épaississe. Ajoutez de la crème fraîche, assaisonnez, terminez la cuisson',
      image: './assets/image2.png',
      rating: 4,
    },
    {
      title: 'Poulet aux marrons',
      ingredients: 'Poulet de 1,3 kg, 200 g de marrons cuits, 30 g de beurre doux, 3 cl d’huile d’arachide, 1 gousse d’ail, 1 branche de thym, 1 feuille de laurier, 6 pincées de sel fin, 10 g de gros sel',
      instructions: 'Préchauffez le four à 220 °C. Mettez le poulet à température ambiante pendant 10 min avant d’entamer la cuisson. Divisez les marrons en deux. Épluchez l’ail et lavez la feuille de laurier et le thym, ensuite disposez-les à l’intérieur de la volaille. Rajoutez 1 c. à soupe de gros sel. Entaillez les cuisses et les filets puis placez-y les marrons. Enduisez le poulet d’huile. Salez et poivrez. Cuisez la volaille sur une cuisse en utilisant un plat correspondant à sa taille. Additionnez 15 g de beurre et laissez cuire au four pendant 30 min. Au bout de 15 min, placez l’autre cuisse du poulet contre le récipient. Au final, posez la viande sur le dos et intégrez le beurre restant ainsi que des portions de marrons. Rôtissez la préparation durant 20 min. Enrobez souvent le poulet avec le jus de cuisson',
      image: './assets/image3.png',
      rating: 4,
    },
    {
      title: 'Tajine de boeuf',
      ingredients: 'Oignons, Huile d’olive, Cubes de viandes, Sel,Tomates, Raisins secs',
      instructions: 'Déposez les oignons au fond d’un plat à tajine, arrosez d’un filet d’huile d’olive. Ajoutez les cubes de viandes, salez. Mettez le couvercle, enfournez pendant 30 minutes. Sortez le plat du four, baissez la température à 180°, insérez la moitié des tomates au milieu de la viande, parsemez de raisins secs.',
      image: './assets/image4.png',
      rating: 3,
    },
    {
      title: 'Salade de riz',
      ingredients: 'Riz, Œufs, Tomates, Olives, Maïs, Thon',
      instructions: 'Faites cuire le riz à l’eau bouillante salée. Une fois cuit, rincez-le à l’eau froide pour enlever l’amidon. Quand le riz est froid, ajoutez les œufs coupés en lamelles, les tomates en dés, les olives, le maïs et le thon en miettes. Réservez au réfrigérateur puis servez frais',
      image: './assets/image5.png',
      rating: 2,
    },
  ];

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
}
