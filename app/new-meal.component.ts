import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model'

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div>
      <h3>Add a Meal:</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
      <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
      <button class="btn btn-lg btn-success" (click)="addMeal(newName, newDescription, newCalories)">Add</button>
    </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Object>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newDescription: HTMLInputElement, newCalories: HTMLInputElement){
    this.onSubmitNewMeal.emit({
      name: newName.value,
      description: newDescription.value,
      calories: newCalories.value,
    });
    newName.value = "";
    newDescription.value = "";
    newCalories.value = "";
  }
}
