import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { CouponComponent } from "./store/coupon.component";
import { FormsModule } from "@angular/forms";
import {productDetailComponent} from "./store/productDetail.component";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,FormsModule,
    RouterModule.forRoot([
      {
        path: 'productDetail/:id',
        component: productDetailComponent,
      },
      {
        path: "coupon",
        component: CouponComponent,
      },
      {
        path: "store",
        component: StoreComponent,
      },
      {
        path: "cart",
        component: CartDetailComponent,
      },
      {
        path: "checkout",
        component: CheckoutComponent,
      },

      { path: "**", redirectTo: "/coupon" },
    ]),
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
