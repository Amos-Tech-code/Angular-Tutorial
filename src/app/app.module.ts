import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";
import {TemplateFormComponent} from "./template-form/template-form.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormComponent,
    TemplateFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
