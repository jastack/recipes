import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: {title: string, description: string, imagePath: string};
  @Output() selectedRecipe = new EventEmitter<{title: string, description: string, imagePath: string}>()
  
  selectRecipe() {
    this.selectedRecipe.emit(this.recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
