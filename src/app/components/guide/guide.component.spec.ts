import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { guideComponent } from './guide.component';

describe('guideComponent', () => {
  let component: guideComponent;
  let fixture: ComponentFixture<guideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ guideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(guideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
