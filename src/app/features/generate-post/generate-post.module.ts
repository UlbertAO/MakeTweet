import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratePostComponent } from './generate-post.component';
import { RouterModule, Routes } from '@angular/router';
import { HasTruthyPipe } from 'src/app/shared/has-truthy.pipe';

export const ROUTES: Routes = [{ path: '', component: GeneratePostComponent }];

@NgModule({
  declarations: [GeneratePostComponent, HasTruthyPipe],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class GeneratePostModule {
  getComponent() {
    return GeneratePostComponent;
  }
}
