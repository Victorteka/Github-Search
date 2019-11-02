import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.css"]
})
export class SearchFormComponent implements OnInit {
  searchText: string;

  @Output() searchTerm = new EventEmitter();

  constructor() {}

  search() {
    this.searchTerm.emit(this.searchText);
    this.searchText = "";
  }

  ngOnInit() {}
}
