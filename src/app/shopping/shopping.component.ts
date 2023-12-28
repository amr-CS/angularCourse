import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ingrediant } from '../shared/ingrediant.module';
import { shoppingService } from './shopping.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent implements OnInit ,OnDestroy{
  private sSubscripe: Subscription = new Subscription;
  ingrediant:ingrediant[
  ]=[]
  @Input() ing:ingrediant | undefined;
  @Output() ingerdvalue= new EventEmitter<ingrediant>();
  /**
   *
   */
  constructor(private ingerdianServ:shoppingService) {
    
  }
  ngOnDestroy(): void {
    this.sSubscripe.unsubscribe()
  }
  ngOnInit() {
this.ingrediant=this.ingerdianServ.getIngerdiant()
this.sSubscripe=this.ingerdianServ.ingEvent.subscribe((ing:ingrediant[])=>{

  this.ingrediant=ing;
})
    
  }


  selectIngerdian:ingrediant | undefined;
 /* onSelect(ing:ingrediant){
this.ingrediant.push(ing)

  }*/
}
