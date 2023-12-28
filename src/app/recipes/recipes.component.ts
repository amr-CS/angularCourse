import { Component, OnInit } from '@angular/core';
import { recipe } from './recipe.module';
import { recipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers:[recipeService]
})
export class RecipesComponent implements OnInit {
selectedRecipe:recipe | undefined;


/**
 *
 */
constructor(private recipS:recipeService) {
  
}
  ngOnInit() {
    this.recipS.recpieEvent.subscribe((recipe:recipe)=>{
this.selectedRecipe=recipe
    })
  }

}
