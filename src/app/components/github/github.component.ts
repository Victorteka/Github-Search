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
  updateInfo = new User("", "", "", "", 0, 0, "");
  myRepos: Repository[] = [];
  inputText: string;

  constructor(private githubResponse: GithubApiService) {
    this.myInfo = new User("", "", "", "", 0, 0, "");
  }

  search(searchTerm) {
    this.inputText = searchTerm;
    this.githubResponse.searchUser(searchTerm).subscribe(data => {
      console.log(data["items"][0].login);

      this.updateInfo = new User(
        data["items"][0].login,
        data["items"][0].avatar_url,
        "",
        "",
        0,
        0,
        ""
      );
    });
  }

  ngOnInit() {
    this.githubResponse.getMyInfo("Victorteka").subscribe(data => {
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
    this.githubResponse.getMyRepos("Victorteka").subscribe(data => {
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
    });

    this.search(this.inputText);
  }
}
