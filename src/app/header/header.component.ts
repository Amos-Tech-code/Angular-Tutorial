import {Component, inject} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {CartService} from "../cart/cart.service";
import {MatBadge} from "@angular/material/badge";

@Component({
  selector: 'app-header',
  imports: [
    MatToolbar,
    MatButton,
    MatIcon,
    MatBadge
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  protected readonly cartService = inject(CartService);

}
