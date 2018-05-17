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
import { GridService } from './shared/components/grid/grid.service';

import { ArrayFilterPipe } from "./shared/card-filter.pipe";
import { POdetailsService } from "./pages/podetails/podetails.service";
import { ReassignComponent } from "./shared/components/reassign/reassign.component";

import { ReassignService } from './shared/components/reassign/reassign.service';
import { ProgressStatusComponent } from "./shared/components/progress-status/progress-status.component";
import { CardPersonalizationService } from "./pages/card-personalization/card-personalization.service";

@NgModule({
  declarations: [
    AppComponent,
    SharedComponents,
   
    ArrayFilterPipe,
    ReassignComponent,
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

