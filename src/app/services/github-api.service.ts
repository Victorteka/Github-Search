import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../utils/user";
import { Observable } from "rxjs";
import { IUser } from "../iuser";

@Injectable({
  providedIn: "root"
})
export class GithubApiService {
  constructor(private http: HttpClient) {}

  getMyInfo(): Observable<IUser> {
    return this.http.get<IUser>(`https://api.github.com/users/Victorteka`);
  }
}
