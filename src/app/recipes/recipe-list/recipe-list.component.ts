import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test','https://www.vegrecipesofindia.com/wp-content/uploads/2013/03/pulao-recipe-280x280.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://www.vegrecipesofindia.com/wp-content/uploads/2013/03/pulao-recipe-280x280.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
