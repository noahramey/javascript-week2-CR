import {Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'calories',
  pure: false
})
export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var calorieFilter = args[0];
    var output: Meal[] = [];
    if(calorieFilter === "moreCal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (calorieFilter === "lessCal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
