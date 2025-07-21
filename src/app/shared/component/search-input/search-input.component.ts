import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  searchValue = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(value: string) {
    this.searchValue = value;
    this.search.emit(value);
  }

}
