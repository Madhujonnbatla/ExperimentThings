import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplemasterComponent } from './samplemaster.component';

describe('SamplemasterComponent', () => {
  let component: SamplemasterComponent;
  let fixture: ComponentFixture<SamplemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplemasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
