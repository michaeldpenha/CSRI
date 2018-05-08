import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GridComponent } from './shared/components/grid/grid.component';
import { SalesorderlistComponent } from './components/salesorderlist/salesorderlist.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { GridService } from './shared/components/grid/grid.service';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { UtilsService } from './shared/services/utils/utils.service';
import { CardsComponent } from "./shared/components/cards/cards.component";
import { PodetailsComponent } from "./components/podetails/podetails.component";
import { ArrayFilterPipe } from "./shared/card-filter.pipe";
import { POdetailsService } from "./components/podetails/podetails.service";
import { HttpClientModule } from "@angular/common/http";
import { SearchfieldComponent } from './shared/components/searchfield/searchfield.component';
import { FilterPanelComponent } from './shared/components/filter-panel/filter-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ButtonComponent } from './shared/components/button/button.component';
import { ReassignComponent } from "./components/reassign/reassign.component";

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    SalesorderlistComponent,
    PaginationComponent,
    HeaderComponent,
    SidebarComponent,
    CardsComponent,
    PodetailsComponent,
    ArrayFilterPipe,
    SearchfieldComponent,
    FilterPanelComponent,
    ButtonComponent,
    ReassignComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [GridService,UtilsService,POdetailsService,ArrayFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
