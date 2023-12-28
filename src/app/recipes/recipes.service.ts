import { EventEmitter, Injectable } from "@angular/core";
import { recipe } from "./recipe.module";
import { ingrediant } from "../shared/ingrediant.module";
import { shoppingService } from "../shopping/shopping.service";
import { Subject } from "rxjs";
@Injectable()
export class recipeService{
  

  /**
   *
   */
  constructor( private ingerdiant:shoppingService) {
    
  }

     recpieEvent = new Subject<recipe>(); 
    recipes:recipe[]=[
        new recipe("test meal","meal very good",'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
        [new ingrediant("bun",5),
        new ingrediant("bread",10)
    ]),
        new recipe("haapy meal","meal very tast",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrU3fTh5xUzjRFuQ5fcHLLZ4GD9dVsfrjxN-bqzXKtscmtada-fuhO44TK60Iz1nhDOkY&usqp=CAU',
        [new ingrediant("apple",20),
        new ingrediant("tomtato",30)
    ]
        )
      
      ];


      getRecipe(){
        return this.recipes.slice();
      }
      getRecipebyId(id:number){
        return this.recipes.slice()[id];
      }
      addIngerdiant(inger :ingrediant[]) {
        this.ingerdiant.addingerdiantEdit(inger);
      }
}