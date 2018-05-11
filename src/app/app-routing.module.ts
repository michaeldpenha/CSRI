import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesorderlistComponent } from './components/salesorderlist/salesorderlist.component';
import { PodetailsComponent } from "./components/podetails/podetails.component";
import { ReassignComponent } from "./components/reassign/reassign.component";
import { CardPersonalizationComponent } from "./components/card-personalization/card-personalization.component";
import {OrderListComponent} from './components/order-list/order-list.component';

import {OrderListResolveService} from  './shared/services/resolve/order-list/order-list-resolve.service';
const routes: Routes = [{
  path: '', redirectTo: '/sales-order', pathMatch: 'full'
}, {
  path: 'sales-order', component: OrderListComponent,resolve : {config : OrderListResolveService},data: { path: 'sales' }
}, {
  path: 'po-details', component: PodetailsComponent
}, {
  path: 'reassign', component: ReassignComponent
}, {
  path: 'po-personalization', component: CardPersonalizationComponent
}, {
  path: 'production-order', component: OrderListComponent,resolve : {config : OrderListResolveService},data: { path: 'production' }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

