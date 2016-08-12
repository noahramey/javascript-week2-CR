import { Component } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, NewMealComponent],
  template: `
    <meal-display *ngFor="#currentMeal of mealList"
      [meal]='currentMeal'>
    </meal-display>
    <new-meal (onSubmitNewMeal)="createMeal($event.name, $event.description, $event.calories)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];

  createMeal(name: string, description: string, calories: number): void {
    this.mealList.push(
      new Meal(name, description, calories, this.mealList.length)
    );
  }
}
