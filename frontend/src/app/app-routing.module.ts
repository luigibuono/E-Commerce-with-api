import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { pageComponent } from './pages/home/page.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'page/cart',
    component: CartComponent,
  },
{
    path: 'login',
    component: LoginComponent,
},
  {
    path: 'signup',
    component: SignupComponent,
  },
  { path: "page", component: pageComponent, canActivate: [AuthGuard] },
  {
    path: 'cart',
    component: CartComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
