import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent,ButtonComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button
          (click)="filterResults(filter.value)"
          class="primary"
          type="button"
        >
          Search
        </button>
      </form>
    </section>
   
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // this how we add property

  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = this.housingLocationList;
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );

    console.log(this.filteredLocationList);
  }
}
