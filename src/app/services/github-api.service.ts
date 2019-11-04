import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../utils/user";
import { Observable } from "rxjs";
import { IUser } from "../iuser";
import { IRepos } from "../irepos";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class GithubApiService {
  constructor(private http: HttpClient) {}

  getMyInfo(username: string): Observable<IUser> {
    let apiUrl = `https://api.github.com/users/${username}?access_token=${environment.accessToken}`;
    return this.http.get<IUser>(apiUrl);
  }
  getMyRepos(username: string): Observable<IRepos[]> {
    let apiUrl = `https://api.github.com/users/${username}/repos?access_token=${environment.accessToken}`;
    return this.http.get<IRepos[]>(apiUrl);
  }
  searchUser(username: string) {
    return this.http.get(`https://api.github.com/search/users?q=${username}`);
  }
  searchRepo(username: string): Observable<IRepos[]> {
    return this.http.get<IRepos[]>(
      `https://api.github.com/users/${username}/repos?access_token=${environment.accessToken}`
    );
  }
  getRepos(repoName: string) {
    return this.http.get(
      `https://api.github.com/search/repositories?q${repoName}?access_token=${environment.accessToken}`
    );
  }
}
