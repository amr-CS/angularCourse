import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {
id!:number;
editmode:boolean=false;
constructor(private rout:ActivatedRoute){


}
  ngOnInit(): void {
    this.rout.params.subscribe(
      (parm:Params)=>
       {
        this.id=parm['id']
        this.editmode=parm['id']==null?false:true;
      }

    )
  }

}
