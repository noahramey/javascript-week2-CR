import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <div class="edit-display">
      <h3>Edit "{{ meal.name }}"</h3>
      <input [(ngModel)]="meal.name">
      <input [(ngModel)]="meal.description">
      <input [(ngModel)]="meal.calories">
    </div>
  `
})
export class EditMealComponent {
  public meal: Meal;
}
