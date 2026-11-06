import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HelloComponent} from "./hello/hello.component";
import {HeaderComponent} from "./header/header.component";
import {ProductsGridComponent} from "./products/products-grid/products-grid.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelloComponent,
    HeaderComponent,
    ProductsGridComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
