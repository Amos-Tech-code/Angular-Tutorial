import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import { BootstrapTutorialComponent } from './learning/bootstrap-tutorial/bootstrap-tutorial.component';
import { HtmlCssComponent } from './learning/html-css/html-css.component';
import { HomeComponent } from './learning/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapTutorialComponent,
    HtmlCssComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
