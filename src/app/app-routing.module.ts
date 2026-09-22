import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {BootstrapTutorialComponent} from "./learning/bootstrap-tutorial/bootstrap-tutorial.component";
import {HtmlCssComponent} from "./learning/html-css/html-css.component";
import {HomeComponent} from "./learning/home/home.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'html-css', component: HtmlCssComponent},
  {path: 'bootstrap-tutorial', component: BootstrapTutorialComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
