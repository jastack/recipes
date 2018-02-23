import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<{ title: string, description: string, imagePath: string }>();


  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test description', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
    new Recipe('Next Recipe', 'This is a test description', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
  ];

  onSelectRecipe(recipe) {
    this.selectedRecipe.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  } 

}
