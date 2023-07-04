import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent {
  /**
   * @Input Send an event from parent to child
   */
  @Input() locationList: HousingLocation[] = [];

  results: HousingLocation[] = [];

  /** @Ouput listener event from child to parent */
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();

  searchHousingLocations(searchText: string) {
    this.results = this.locationList.filter(
      (location: HousingLocation) => location.city
        .toLowerCase()
        .includes(
          searchText.toLowerCase()
        ));
  }

  /** Need to be sorted list first before using this method */
  binarySearchCity(arr: HousingLocation[], keySearch: string): HousingLocation[] {
    // binary search
    let /* int */ left: number = 0;
    let /* int */ right: number = arr.length - 1;
    let /* int */ mid: number = 0;
    let results: HousingLocation[] = [];/* reset this result after n click search times */
    // started searching...
    while (left <= right) {
      mid = Math.ceil((left + right) / 2);
      if (arr[mid].city.toLocaleLowerCase().includes(keySearch.toLocaleLowerCase())) {
        results.push(arr[mid]);// tim tat ca ket qua
        break;
      } else if (arr[mid].city.toLocaleLowerCase().localeCompare(keySearch.toLocaleLowerCase()) < 0) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    // return null if not found or success with as least one result;
    return results;
  }

  /** Application search button */
  btnSearchHousingLocation(keySearch: string) {
    if (!keySearch) return;
    this.results = this.binarySearchCity(this.locationList, keySearch);
  }

  selectedLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }
}
