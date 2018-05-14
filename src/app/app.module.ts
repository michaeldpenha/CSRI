import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
/**
 * SharedComponents from shared folder
 */
import { SharedComponents } from './shared/components/index';


/**
 * SharedService from Shared folder
 */
import { SharedServices, HttpInterceptorsService } from './shared/services/index';
/**
 * Pages Component
 */
import {PagesComponent} from './pages/index';

import { SalesorderlistComponent } from './components/salesorderlist/salesorderlist.component';
import { GridService } from './shared/components/grid/grid.service';
import { PodetailsComponent } from "./components/podetails/podetails.component";
import { ArrayFilterPipe } from "./shared/card-filter.pipe";
import { POdetailsService } from "./components/podetails/podetails.service";

import { ReassignComponent } from "./components/reassign/reassign.component";
import { CardPersonalizationService } from './components/card-personalization/card-personalization.service';
import { CardPersonalizationComponent } from './components/card-personalization/card-personalization.component';
import { ReassignService } from './components/reassign/reassign.service';
import { ProgressStatusComponent } from "./shared/components/progress-status/progress-status.component";
@NgModule({
  declarations: [
    AppComponent,
    SharedComponents,
    SalesorderlistComponent,
    PodetailsComponent,
    ArrayFilterPipe,
    ReassignComponent,
    CardPersonalizationComponent,
    PagesComponent,
    ProgressStatusComponent
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
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorsService,
    multi: true
  }, SharedServices, GridService, POdetailsService, ArrayFilterPipe, CardPersonalizationService, ReassignService],
  bootstrap: [AppComponent]
})
export class AppModule { }

