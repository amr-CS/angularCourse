import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:"app-header",
    templateUrl:"../header/header.component.html"
})
export class HeaderComponent{

@Output()  message=new EventEmitter<string>();

 onSelect(value:string){
   
this.message.emit(value)
    }
    
}