import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { cartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";
import { CouponComponent } from "./coupon.component";

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [
    StoreComponent,
    cartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    CouponComponent
  ],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent,CouponComponent],
})
export class StoreModule {}
