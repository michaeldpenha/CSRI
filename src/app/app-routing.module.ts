import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesOrderComponent, ProductionOrderComponent,LoginComponent,PodetailsComponent,CardPersonalizationComponent } from './pages/index';

const routes: Routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},{
  path: 'login',
  component: LoginComponent
}, {
  path: 'sales-order',
  component: SalesOrderComponent
}, {
  path: 'po-details/:id',
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

