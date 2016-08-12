import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model'

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="col-sm-6 jumbotron text-center">
      <h3>Add a Meal:</h3>
      <input placeholder="Name" #newName><br>
      <input placeholder="Description" #newDescription><br>
      <input placeholder="Calories" #newCalories><br>
      <button class="btn btn-success" (click)="addMeal(newName, newDescription, newCalories)">Add</button>
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
