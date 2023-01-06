import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SellerComponent } from './components/seller/seller.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { SellerLoginComponent } from './components/seller-login/seller-login.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CartComponent } from './components/cart/cart.component';
import { Cart } from './common/cart';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const route:Routes=[
  {path:'',component:ProductComponent},
  {path:'login',component:UserLoginComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'registration',component:UserRegistrationComponent},
  {path:'seller',component:SellerComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'editPro/:id',component:AddProductComponent},
  {path:'sellerlogin',component:SellerLoginComponent},
  {path:'details/:id',component:ProductViewComponent},
  {path:'cart',component:CartComponent},
  {path:'productview',component:ProductViewComponent},
  {path:'userid/uid',component:ProductViewComponent},
  {path: 'contact-us',component:ContactUsComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    UserLoginComponent,
    WelcomeComponent,
    SellerComponent,
    UserRegistrationComponent,
    AddProductComponent,
    SellerLoginComponent,
    ProductViewComponent,
    CartComponent,
    ContactUsComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
