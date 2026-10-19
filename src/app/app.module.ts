import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";
import {TemplateFormComponent} from "./template-form/template-form.component";
import {ProfileEditorComponent} from "./profile-editor/profile-editor.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {LifecycleComponent} from "./lifecycle/lifecycle.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormComponent,
    TemplateFormComponent,
    ProfileEditorComponent,
    UserLoginComponent,
    LifecycleComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
