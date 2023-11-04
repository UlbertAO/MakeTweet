import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratePostComponent } from './generate-post.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [{ path: '', component: GeneratePostComponent }];

@NgModule({
  declarations: [GeneratePostComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class GeneratePostModule {
  getComponent() {
    return GeneratePostComponent;
  }
}
