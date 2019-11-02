import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-search-repo",
  templateUrl: "./search-repo.component.html",
  styleUrls: ["./search-repo.component.css"]
})
export class SearchRepoComponent implements OnInit {
  searchRepo: any;

  @Output() repoName = new EventEmitter<any>();

  search() {
    this.repoName.emit(this.searchRepo);
    this.searchRepo = "";
  }

  constructor() {}

  ngOnInit() {}
}
