import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }
  /**
   * sort data ascending and descending
   */
  public sort = (a: any, b: any, property: string, direction: number) : number => {
    if (a[property] < b[property]) {
      return -1 * direction;
    }
    else if (a[property] > b[property]) {
      return 1 * direction;
    }
    else {
      return 0;
    }
  }
  /**
   * sliceArray 
   */
  public sliceArray = (item : any, startIndex : number, endIndex : number) : any => {
    let slicedArray : any  = [];
    slicedArray = item.slice(startIndex,endIndex);
    return slicedArray;
  }
}
