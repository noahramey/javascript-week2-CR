import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div>
      <h1>Meal Tracker</h1>
      <meal-list [mealList]="meals">
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[]
  constructor(){
    this.meals = [
      new Meal("test-meal", "test-description", 500, 0),
      new Meal("test-meal2", "test-description2", 400, 1),
      new Meal("test-meal3", "test-description3", 300, 2)
    ]
  }
}
