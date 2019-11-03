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
  updateInfo: User;
  myRepos: Repository[] = [];
  updateRepos: Repository[] = [];
  inputText: string;

  constructor(private githubResponse: GithubApiService) {
    this.myInfo = new User("", "", "", "", 0, 0, "", "");
  }

  search(searchTerm) {
    this.inputText = searchTerm;
    this.githubResponse.searchUser(searchTerm).subscribe(
      data => {
        this.updateInfo = new User(
          data["items"][0].login,
          data["items"][0].avatar_url,
          "",
          "",
          0,
          0,
          "",
          data["items"][0].html_url
        );
      },
      error => {
        console.log("An error occured");
      }
    );
    this.githubResponse.searchRepo(searchTerm).subscribe(
      data => {
        this.updateRepos = [];
        for (let i = 0; i < data.length; i++) {
          let repo = new Repository(
            data[i].name,
            data[i].description,
            data[i].html_url,
            data[i].language,
            data[i].created_at
          );
          this.updateRepos.push(repo);
        }
        console.log(data[0].created_at);
        console.log(data);
      },
      error => {
        console.log("An error occured");
      }
    );
    this.githubResponse.getRepos(searchTerm).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log("An Error occured");
      }
    );
  }

  ngOnInit() {
    this.updateInfo = new User("", "", "", "", 0, 0, "", "");

    this.githubResponse.getMyInfo("Victorteka").subscribe(data => {
      this.myInfo = new User(
        data.name,
        data.avatar_url,
        data.location,
        data.bio,
        data.followers,
        data.following,
        data.blog,
        data.html_url
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
    if (this.inputText) {
      this.search(this.inputText);
    }
  }
}
