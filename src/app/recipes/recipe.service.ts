import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
recipeChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         "A Test Recipe", 
    //         "This is a Test", 
    //         "https://www.iberdrola.com/documents/20125/39904/real_food_746x419.jpg/0c9185fa-b2dd-e1a6-602c-bca55f68e54e?t=1626673209445",
    //         [
    //             new Ingredient("Meat", 1),
    //             new Ingredient("french Fries", 14)
    //         ]
    //         ),

    //     new Recipe(
    //         "A Test Recipe", 
    //         "This is a Test", 
    //         "https://www.expatica.com/app/uploads/sites/6/2014/05/german-food.jpg", 
    //         [
    //             new Ingredient("Meat", 1),
    //             new Ingredient("french Fries", 1)
    //         ]
    //         )
    
    //   ];

    private recipes: Recipe[] = [];


      constructor(private slService: ShoppingListService){}

      setRecipes(recipes:Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
      }


      getRecipes() {
        return this.recipes.slice();
      }


      getRecipe(index: number) {
        return this.recipes[index];
      }

      ingredientsToSl(ingredients:Ingredient[]){
    this.slService.addIngredient(ingredients);

      
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        this.recipeChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
       this.recipes.splice(index, 1);
       this.recipeChanged.next(this.recipes.slice())
    }

}