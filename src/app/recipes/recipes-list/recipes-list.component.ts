import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { recipe } from '../recipe.module';
import { recipeService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit  {
  recipes:recipe[]=[];

  /**
   *
   */
  
  @Output() RecipeListEvent=new EventEmitter<recipe>();

 
  constructor(private recipeS: recipeService,private rout :ActivatedRoute,private router:Router) {
   
  }
  ngOnInit() {
    this.recipes=this.recipeS.getRecipe();
  }

  onClickAdd(){
    this.router.navigate(['new'],{relativeTo:this.rout})
  }

}
