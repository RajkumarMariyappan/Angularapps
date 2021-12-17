import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenfromsComponent } from './template-drivenfroms.component';

describe('TemplateDrivenfromsComponent', () => {
  let component: TemplateDrivenfromsComponent;
  let fixture: ComponentFixture<TemplateDrivenfromsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenfromsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenfromsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
