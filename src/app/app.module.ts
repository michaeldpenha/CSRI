import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

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

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './shared/config/i18n/assets/i18n/', '.json');
// }

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
    HttpClientModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorsService,
    multi: true
  }, SharedServices, GridService, POdetailsService, ArrayFilterPipe, CardPersonalizationService, ReassignService],
  bootstrap: [AppComponent]
})
export class AppModule { }

