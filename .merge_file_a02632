import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PodetailsComponent } from "./components/podetails/podetails.component";
import { ReassignComponent } from "./components/reassign/reassign.component";
import { CardPersonalizationComponent } from "./components/card-personalization/card-personalization.component";

import { SalesOrderComponent, ProductionOrderComponent } from './pages/index';
const routes: Routes = [{
  path: '',
  redirectTo: '/sales-order',
  pathMatch: 'full'
}, {
  path: 'sales-order',
  component: SalesOrderComponent
}, {
  path: 'po-details',
  component: PodetailsComponent
}, {
  path: 'reassign',
  component: ReassignComponent
}, {
  path: 'po-personalization',
  component: CardPersonalizationComponent
}, {
  path: 'production-order',
  component: ProductionOrderComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

