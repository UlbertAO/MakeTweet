import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePostComponent } from './generate-post.component';

describe('GeneratePostComponent', () => {
  let component: GeneratePostComponent;
  let fixture: ComponentFixture<GeneratePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratePostComponent]
    });
    fixture = TestBed.createComponent(GeneratePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
