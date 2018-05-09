import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesorderlistComponent } from './components/salesorderlist/salesorderlist.component';
import { PodetailsComponent } from "./components/podetails/podetails.component";
import { ReassignComponent } from "./components/reassign/reassign.component";
import { CardPersonalizationComponent } from "./components/card-personalization/card-personalization.component";

const routes: Routes = [{
  path : '', redirectTo : '/sales-order', pathMatch : 'full'
},{
  path : 'sales-order',component : SalesorderlistComponent
},
{
  path : 'po-details',component : PodetailsComponent
},
{
  path : 'reassign',component : ReassignComponent
},{
  path : 'po-personalization',component : CardPersonalizationComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

