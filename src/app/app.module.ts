import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GithubComponent } from "./components/github/github.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SearchFormComponent } from './components/search-form/search-form.component';
import { RepoOverlayDirective } from './repo-overlay.directive';

@NgModule({
  declarations: [AppComponent, GithubComponent, NavbarComponent, SearchFormComponent, RepoOverlayDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
