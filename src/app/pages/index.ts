import {SalesOrderComponent} from './sales-order/sales-order.component';
import {ProductionOrderComponent} from './production-order/production-order.component';
import { CardPersonalizationComponent } from "./card-personalization/card-personalization.component";
import { PodetailsComponent } from "./podetails/podetails.component";
import { LoginComponent } from './login/login.component';
export const PagesComponent = [SalesOrderComponent,ProductionOrderComponent,CardPersonalizationComponent,PodetailsComponent,LoginComponent];

export * from './sales-order/sales-order.component';
export * from './production-order/production-order.component';
export * from './podetails/podetails.component';
export * from './card-personalization/card-personalization.component';
export * from './login/login.component';