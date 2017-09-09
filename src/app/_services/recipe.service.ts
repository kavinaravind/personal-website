import { Injectable } from '@angular/core';
import { Recipe } from '../personal/cuisine/recipes/recipe.model';
import { Ingredient } from '../personal/cuisine/shopping-list/ingredient.model';
import { ShoppingListService } from '../_services/shopping-list.service';
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {
  
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
        new Ingredient('Lemon', 2),
        new Ingredient('Cilantro', 1)
      ]
    ),
    new Recipe(
      'Juicy Dank Burger',
      'Nuff Said',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg',
      [
        new Ingredient('Buns', 4),
        new Ingredient('Meat', 2),
        new Ingredient('Cheese', 1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
