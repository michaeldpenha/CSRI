import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }
  /**
   * sort data ascending and descending
   */
  public sort = (a: any, b: any, property: string, direction: number): number => {
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
   * @Params : item - the array which needs to be slice
   * startIndex  - the index from which it needs to start
   * endIndex - the index till where it will end
   */
  public sliceArray = (item: any, startIndex: number, endIndex: number): any => {
    let slicedArray: any = [];
    slicedArray = item.slice(startIndex, endIndex);
    return slicedArray;
  }
  /**
   * Filter Array
   * @Params : items - the array which needs to be filtered
   * filtertext - the text in which the array needs to be filtered
   * searchIndex - the dataIndex on whihc it needs to search 
   * 
   * ([{name :'Michael'}], 'michael',['name'])
   */
  public filterArray = (items: any, filterText: string, searchIndex: any[]): any => {
    let filteredItems: any = [];
    filteredItems = items.filter((item: any) => {
      let result: boolean = false;
      searchIndex.forEach((obj: any) => {
        result = searchIndex.length > 1 ? result || String(item[obj]).toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1 : String(item[obj]).toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1;
      });
      return result;
    });
    return filteredItems;
  }
}
