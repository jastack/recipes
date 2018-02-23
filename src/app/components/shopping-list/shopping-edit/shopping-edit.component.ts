import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredient = new EventEmitter<{name: string, amount: number}>();
  constructor() { }

  onSubmit(nameInput, amountInput) {
    this.newIngredient.emit({
      name: nameInput.value,
      amount: amountInput.value
    });
  }
  ngOnInit() {
  }

}
