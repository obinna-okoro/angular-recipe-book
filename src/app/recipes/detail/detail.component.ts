import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
recipe: Recipe;
id: number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.params["id"];
  
    this.route.params
    .subscribe(
      (params:Params) => {
        this.id = params["id"];
        this.recipe = this.recipeService.getRecipe(this.id)
      }
    );
  }

  onAddToShoppingList(){
    this.recipeService.ingredientsToSl(this.recipe.ingredients)

  }

  onEditRecipe (){
  this.router.navigate(["edit"], {relativeTo: this.route});
  }


  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(["/recipes"]);
  }

}
