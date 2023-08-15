import { AuthService,} from './../../auth/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  nameUser: string;
  public totalItem: number = 0;

  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curent) => prev + curent, 0);
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService

  ) {}
  ngOnInit(): void {

  }


  getUserName() {
    return JSON.parse(localStorage.getItem('dataUser'))?.firstName;
  }
  getRole() {
    return JSON.parse(localStorage.getItem('dataUser') as any)?.isAdmin;
  }
  
  goTORegister() {
    this.router.navigate(['register']);
  }
  goTOLogin() {
    this.router.navigate(['login']);
  }

  gotoCart() {
    this.router.navigate(['cart']);
  }

  goToProfile() {
    this.router.navigate(['profile']);
  }


  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }


}
