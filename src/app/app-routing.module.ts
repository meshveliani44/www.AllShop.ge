import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailGuard } from './product-list/product-detail.guard';
import { ProductDetailsComponent } from './product-list/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignInGuard } from './welcome/sign-in-guard.guard';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

   
  {

    path: 'welcome', component: WelcomeComponent,
    pathMatch: 'full',
    canActivate: [SignInGuard],
  },
  {
    path: 'products', component: ProductListComponent,
    pathMatch: 'full'
    

  },
  { path: 'products/:id', 
  canActivate: [ProductDetailGuard],
  component: ProductDetailsComponent },
  { path: 'registration', component: RegistrationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
