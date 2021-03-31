import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexedcontentComponent } from './indexedcontent.component';

describe('IndexedcontentComponent', () => {
  let component: IndexedcontentComponent;
  let fixture: ComponentFixture<IndexedcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexedcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexedcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
