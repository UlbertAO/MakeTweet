import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostComponent } from './list-post.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [{ path: '', component: ListPostComponent }];

@NgModule({
  declarations: [ListPostComponent],
  imports: [CommonModule],
})
export class ListPostModule {
  getComponent() {
    return ListPostComponent;
  }
}
