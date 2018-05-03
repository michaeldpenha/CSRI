import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GridComponent } from './shared/components/grid/grid.component';
import { SalesorderlistComponent } from './components/salesorderlist/salesorderlist.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import {GridService} from './shared/services/grid/grid.service';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CardsComponent } from "./shared/components/cards/cards.component";
import { PodetailsComponent } from "./components/podetails/podetails.component";
import { ArrayFilterPipe } from "./shared/card-filter.pipe";
import { POdetailsService } from "./components/podetails/podetails.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    SalesorderlistComponent,
    PaginationComponent,
    HeaderComponent,
    SidebarComponent,
    CardsComponent,PodetailsComponent,
    ArrayFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GridService,POdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
