import { Pipe, PipeTransform } from '@angular/core';  

@Pipe({  
    name: 'myfilter',  
    pure: false  
})  
  
export class ArrayFilterPipe implements PipeTransform {

     transform(items: any[], searchText: boolean): any[] { 
    if(!items) return [];     
      return items.filter( it => {
      return (searchText) ? it.selected == searchText : (!it.selected || it.selected === searchText);
    });
   }
}  