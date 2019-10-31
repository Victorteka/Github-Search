import { Component, OnInit } from "@angular/core";
import { GithubApiService } from "src/app/services/github-api.service";
import { User } from "src/app/utils/user";

@Component({
  selector: "app-github",
  templateUrl: "./github.component.html",
  styleUrls: ["./github.component.css"]
})
export class GithubComponent implements OnInit {
  myInfo: User;

  constructor(private githubResponse: GithubApiService) {}

  ngOnInit() {
    this.githubResponse.getMyInfo().subscribe(data => {
      console.log(data);
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
  }
}
