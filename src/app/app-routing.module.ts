import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserKittenComponent } from './user-kitten/user-kitten.component';

const routes: Routes = [
  {path: '', component: UserKittenComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
