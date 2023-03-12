import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFirstComponent } from './app-first.component';

describe('AppFirstComponent', () => {
  let component: AppFirstComponent;
  let fixture: ComponentFixture<AppFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
