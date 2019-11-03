import { Component, OnInit } from "@angular/core";
import { Repository } from "src/app/utils/repository";
import { GithubRepoService } from "src/app/services/github-repo.service";

@Component({
  selector: "app-repo",
  templateUrl: "./repo.component.html",
  styleUrls: ["./repo.component.css"]
})
export class RepoComponent implements OnInit {
  repos: Repository[] = [];

  inputRepo: string;

  searchRepo(reposearched) {
    this.repos = [];
    this.repoService.getRepos(reposearched).subscribe(
      data => {
        for (let i = 0; i < data["items"].length; i++) {
          let repo = new Repository(
            data["items"][i].owner.login,
            data["items"][i].description,
            data["items"][i].html_url,
            data["items"][i].language,
            data["items"][i].created_at
          );
          this.repos.push(repo);
        }
        console.log(this.repos);
      },
      error => {
        console.log("Error: " + JSON.stringify(error));
      }
    );
  }

  constructor(private repoService: GithubRepoService) {}

  ngOnInit() {
    if (this.inputRepo != null) {
      this.searchRepo(this.inputRepo);
    }
  }
}
