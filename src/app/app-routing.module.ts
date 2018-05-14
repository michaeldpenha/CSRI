import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PodetailsComponent } from "./pages/podetails/podetails.component";

import { SalesOrderComponent, ProductionOrderComponent } from './pages/index';
import { CardPersonalizationComponent } from "./pages/card-personalization/card-personalization.component";

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
},  {
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

