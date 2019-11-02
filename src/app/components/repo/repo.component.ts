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

  searchRepo(reposearched) {
    this.repoService.getRepos(reposearched).subscribe(data => {
      console.log(data);
    });
  }

  constructor(private repoService: GithubRepoService) {}

  ngOnInit() {
    this.searchRepo("AkanNames");
  }
}
