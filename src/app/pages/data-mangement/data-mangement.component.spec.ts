import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMangementComponent } from './data-mangement.component';

describe('DataMangementComponent', () => {
  let component: DataMangementComponent;
  let fixture: ComponentFixture<DataMangementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataMangementComponent]
    });
    fixture = TestBed.createComponent(DataMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
