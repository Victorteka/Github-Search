import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgProgressModule } from "@ngx-progressbar/core";
import { NgProgressHttpClientModule } from "@ngx-progressbar/http-client";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GithubComponent } from "./components/github/github.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SearchFormComponent } from "./components/search-form/search-form.component";
import { RepoOverlayDirective } from "./repo-overlay.directive";
import { DateCountPipe } from "./date-count.pipe";
import { RepoComponent } from "./components/repo/repo.component";
import { SearchRepoComponent } from "./components/search-repo/search-repo.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    NavbarComponent,
    SearchFormComponent,
    RepoOverlayDirective,
    DateCountPipe,
    RepoComponent,
    SearchRepoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
