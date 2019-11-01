import { Component, OnInit } from "@angular/core";
import { GithubApiService } from "src/app/services/github-api.service";
import { User } from "src/app/utils/user";
import { Repository } from "src/app/utils/repository";

@Component({
  selector: "app-github",
  templateUrl: "./github.component.html",
  styleUrls: ["./github.component.css"]
})
export class GithubComponent implements OnInit {
  myInfo: User;
  myRepos: Repository[] = [];

  constructor(private githubResponse: GithubApiService) {}

  ngOnInit() {
    this.githubResponse.getMyInfo().subscribe(data => {
      // console.log(data);
      this.myInfo = new User(
        data.name,
        data.avatar_url,
        data.location,
        data.bio,
        data.followers,
        data.following,
        data.blog
      );
    });
    this.githubResponse.getMyRepos().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        let repo = new Repository(
          data[i].name,
          data[i].description,
          data[i].html_url,
          data[i].language,
          data[i].created_at
        );
        this.myRepos.push(repo);
      }
      console.log(this.myRepos);
    });
  }
}
