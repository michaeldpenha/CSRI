import {HttpInterceptorsService} from './http/http-interceptors.service';
import {OrderListService} from './order-list/order-list.service';
import { UtilsService } from "./utils/utils.service"; 

export const SharedServices = [OrderListService,UtilsService];

export *  from './http/http-interceptors.service';
export * from './order-list/order-list.service';
export *  from "./utils/utils.service"; 