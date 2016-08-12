import { Component } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriesPipe } from './calories.pipe'
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  pipes: [CaloriesPipe],
  template: `
    <select (change)="onCalorieChange($event.target.value)">
      <option value="all">View All Meals</option>
      <option value="moreCal">View Higher Calorie Meals</option>
      <option value="lessCal">View Lower Calorie Meals</option>
    </select>
    <meal-display *ngFor="#currentMeal of mealList | calories:calorieFilter"
      [meal]='currentMeal'
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal">
    </meal-display>
    <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
    <new-meal (onSubmitNewMeal)="createMeal($event.name, $event.description, $event.calories)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public calorieFilter: string = "all";

  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
  }

  createMeal(name: string, description: string, calories: number): void {
    this.mealList.push(
      new Meal(name, description, calories, this.mealList.length)
    );
  }

  onCalorieChange(filterOption) {
    this.calorieFilter = filterOption;
  }
}
