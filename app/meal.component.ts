import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div>
      <h3>Meal Name: {{ meal.name }}</h3>
      <p>Description: {{ meal.description }}</p>
      <h4>Calories: {{ meal.calories }}</h4>
    </div>
  `
})
export class MealComponent {
  public meal: Meal;
}
