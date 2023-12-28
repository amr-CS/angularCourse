import { ingrediant } from "../shared/ingrediant.module";

export class recipe {
   public name: string ;
   public description: string ;
   public imgPath: string ;
  public ingrediant:ingrediant[] 

/**
 *
 */
constructor(name:string,description:string,imgPath:string,ingrediant:ingrediant[] ) {
    
    this.name=name;
    this.description=description;
    this.imgPath=imgPath;
    this.ingrediant=ingrediant;
}
}