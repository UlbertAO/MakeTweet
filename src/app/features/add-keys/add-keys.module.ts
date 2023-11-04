import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddKeysComponent } from './add-keys.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

export const ROUTES: Routes = [{ path: '', component: AddKeysComponent }];

@NgModule({
  declarations: [AddKeysComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), FormsModule],
})
export class AddKeysModule {
  getComponent() {
    return AddKeysComponent;
  }
}
