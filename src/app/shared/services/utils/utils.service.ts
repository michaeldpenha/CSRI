import { Injectable } from '@angular/core';
import * as moment from 'moment';
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
   * ([{name :'Michael'}], 'michael',['name'], 'OR/AND')
   */
  public filterArray = (items: any, filterText: string, searchIndex: any[], operator: string): any => {
    let filteredItems: any = [];
    filteredItems = items.filter((item: any) => {
      let result: boolean = false;
      searchIndex.forEach((obj: any) => {
        result = searchIndex.length > 1 ? this.conditionBasedOperation(item, obj, filterText, operator, result) : String(item[obj]).toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1;
      });
      return result;
    });
    return filteredItems;
  }
  /**
   * conditionBasedFilter 
   */
  public conditionBasedOperation = (item: any, obj: any, filterText: string, operator: string, result): any => {
    let res: any;
    switch (operator.toLocaleLowerCase()) {
      case 'or': res = result || String(item[obj]).toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1;
        break;
      case 'and': res = result && String(item[obj]).toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1;
        break;
      case 'greater': res = item[obj] > filterText;
        break;
      case 'lesser': res = item[obj] < filterText;
        break;
      case 'lesserorequalto': res = item[obj] <= filterText;
        break;
      case 'greaterorequalto': res = item[obj] >= filterText;
        break;
        case 'lesserorequaltodate': res = moment(item[obj]).diff(moment(filterText),'days') <= 0;
        break;
      case 'greaterorequaltodate': res = moment(item[obj]).diff(moment(filterText),'days') >= 0;
        break;
      default: res = result || String(item[obj]).toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1;
        break;
    }
    return res;
  }
  /**
   * filterArrayRangeBased 
   *   */
  public filterArrayRangeBased = (items: any, index: string, limit: any, operator: string): any => {
    let filteredArray: any = [];
    filteredArray = items.filter((item: any) => {
      let result: boolean;
      result = this.conditionBasedOperation(item, index, limit, operator, result);
      return result;
    });
    return filteredArray;
  }
}
