import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RepoComponent } from "./components/repo/repo.component";
import { GithubComponent } from "./components/github/github.component";

const routes: Routes = [
  { path: "user", component: GithubComponent },
  { path: "repos", component: RepoComponent },
  { path: "", redirectTo: "user", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
