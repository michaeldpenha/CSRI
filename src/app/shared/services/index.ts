import {HttpInterceptorsService} from './http/http-interceptors.service';
import {OrderListService} from './order-list/order-list.service';
import { UtilsService } from "./utils/utils.service"; 
import {LoaderService} from "./loader/loader.service";

export const SharedServices = [OrderListService,UtilsService,LoaderService];

export *  from './http/http-interceptors.service';
export * from './order-list/order-list.service';
export *  from "./utils/utils.service"; 
export *  from "./loader/loader.service";