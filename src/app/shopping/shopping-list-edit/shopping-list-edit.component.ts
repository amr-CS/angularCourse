import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ingrediant } from '../../shared/ingrediant.module';
import { shoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {
@ViewChild("nameInput") name:ElementRef | undefined;
@ViewChild("amountInput") amount:ElementRef | undefined;
/**
 *
 */
constructor(private srIngerdian:shoppingService) {
  
}
//@Output()  ingerdiantEvent=new EventEmitter<ingrediant>();
  addItem(){
const name =this.name?.nativeElement.value;
const amount =this.amount?.nativeElement.value;
this.srIngerdian.onSelect(new ingrediant(name,amount))
//this.ingerdiantEvent.emit(new ingrediant(name,amount))
  }
}
