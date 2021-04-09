import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexedcontentdetailsComponent } from './indexedcontentdetails.component';

describe('IndexedcontentdetailsComponent', () => {
  let component: IndexedcontentdetailsComponent;
  let fixture: ComponentFixture<IndexedcontentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexedcontentdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexedcontentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
