import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <div class="col-sm-6 jumbotron text-center">
      <h3>Edit {{ meal.name }}</h3>
      
      <input [(ngModel)]="meal.name"><br>
      <input [(ngModel)]="meal.description"><br>
      <input [(ngModel)]="meal.calories"><br>
    </div>
  `
})
export class EditMealComponent {
  public meal: Meal;
}
