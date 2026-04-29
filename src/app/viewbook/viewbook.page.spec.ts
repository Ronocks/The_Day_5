import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewbookPage } from './viewbook.page';

describe('ViewbookPage', () => {
  let component: ViewbookPage;
  let fixture: ComponentFixture<ViewbookPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
