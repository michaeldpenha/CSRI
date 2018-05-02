import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesorderlistComponent } from './components/salesorderlist/salesorderlist.component';

const routes: Routes = [{
  path : '', redirectTo : '/sales-order', pathMatch : 'full'
},{
  path : 'sales-order',component : SalesorderlistComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
