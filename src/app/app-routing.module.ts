import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonproductPageComponent } from './pages/nonproduct-page/nonproduct-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  { path: '', component: ProductPageComponent },
  { path: 'nonproduct', component: NonproductPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
