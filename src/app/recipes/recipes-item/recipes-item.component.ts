import { Component, EventEmitter, Input, Output } from '@angular/core';
import { recipe } from '../recipe.module';
import { recipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrl: './recipes-item.component.css'
})
export class RecipesItemComponent {
  @Input() index=0
 @Input() recipe!: recipe;
/**
 *
 */
constructor(private recipeS:recipeService) {
  
}



 onSelect(recipet:recipe){
  this.recipeS.recpieEvent.next(recipet)
 }
}
