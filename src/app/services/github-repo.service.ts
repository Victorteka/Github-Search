import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Repository } from "../utils/repository";
import { Observable } from "rxjs";
import { IRepos } from "../irepos";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class GithubRepoService {
  constructor(private http: HttpClient) {}

  getRepos(repoName: string): Observable<IRepos[]> {
    return this.http.get<IRepos[]>(
      `https://api.github.com/search/repositories?q=${repoName}`
    );
  }
}
