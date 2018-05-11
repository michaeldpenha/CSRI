import { Injectable } from '@angular/core';

@Injectable()
export class OrderListService {
  private _config : any ;

  get config(): any{
    return this._config;
  } 
  set config(cfg : any) {
    this._config = cfg;
  }
  constructor() { }

}
