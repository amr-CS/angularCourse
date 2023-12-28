import { EventEmitter } from "@angular/core";
import { ingrediant } from "../shared/ingrediant.module";

export class shoppingService{
    ingEvent=new EventEmitter<ingrediant[]>();
    ingrediant:ingrediant[
    ]=[new ingrediant("apple",5),
    new ingrediant("orange",3)]

getIngerdiant(){
    return this.ingrediant.slice();
}

onSelect(ing:ingrediant){
    this.ingrediant.push(ing)
    this.ingEvent.emit(this.ingrediant);
}
 

addingerdiantEdit(ing:ingrediant[]){
this.ingrediant.push(...ing)
this.ingEvent.emit(this.ingrediant);

}

}