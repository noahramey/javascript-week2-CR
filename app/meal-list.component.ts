import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  template: `
    <meal-display *ngFor="#currentMeal of mealList"
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
  public onMealSelect: EventEmitter<Meal>;
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }

  createMeal(name: string, description: string, calories: number): void {
    this.mealList.push(
      new Meal(name, description, calories, this.mealList.length)
    );
  }
}
