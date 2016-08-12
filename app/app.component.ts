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
      new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354, 0),
      new Meal("Fries", "I only ate half of them.", 365, 1),
      new Meal("Mud Pie", "I had dessert with my friends and it was delicious.", 672, 2)
    ]
  }
}
