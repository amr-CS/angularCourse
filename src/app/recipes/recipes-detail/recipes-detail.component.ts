import { Component, Input, OnInit, Output } from '@angular/core';
import { recipe } from '../recipe.module';
import { ingrediant } from '../../shared/ingrediant.module';
import { recipeService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrl: './recipes-detail.component.css'
})
export class RecipesDetailComponent implements OnInit {
 /* @Input()*/
  r!: recipe;
id=0
/**
 *
 */
constructor(private recipe:recipeService,private rout:ActivatedRoute,private router:Router) {
  
}
  ngOnInit() {
this.rout.params.subscribe(
  (parm:Params)=>
  {
    this.id=+parm['id']
  this.r=  this.recipe.getRecipebyId(this.id)

})
 
  }
  onClickLink(){
this.router.navigate(['../',this.id,'edit'],{relativeTo:this.rout})
  }
onClickList(){
  this.recipe.addIngerdiant(this.r.ingrediant);
}
}
