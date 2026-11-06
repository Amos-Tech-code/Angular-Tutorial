import {Component, input, output} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {Product} from "../product";

@Component({
  selector: 'app-product-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatButton
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  readonly product = input.required<Product>();
  readonly addButtonLabel = input("Add to Cart");

  readonly addToCart = output<Product>();

  protected onAddToCart(): void {
    this.addToCart.emit(this.product());
  }

}
