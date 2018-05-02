import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GridComponent } from './shared/components/grid/grid.component';
import { SalesorderlistComponent } from './components/salesorderlist/salesorderlist.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import {GridService} from './shared/services/grid/grid.service';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    SalesorderlistComponent,
    PaginationComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
