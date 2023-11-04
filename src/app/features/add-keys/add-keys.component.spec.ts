import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKeysComponent } from './add-keys.component';

describe('AddKeysComponent', () => {
  let component: AddKeysComponent;
  let fixture: ComponentFixture<AddKeysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddKeysComponent]
    });
    fixture = TestBed.createComponent(AddKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
