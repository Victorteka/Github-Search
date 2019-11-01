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

  getMyInfo(): Observable<IUser> {
    let apiUrl = `https://api.github.com/users/Victorteka?access_token=${environment.accessToken}`;
    return this.http.get<IUser>(apiUrl);
  }
  getMyRepos(): Observable<IRepos[]> {
    let apiUrl = `https://api.github.com/users/Victorteka/repos?access_token=${environment.accessToken}`;
    return this.http.get<IRepos[]>(apiUrl);
  }
}
