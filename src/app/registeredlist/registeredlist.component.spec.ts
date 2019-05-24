import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredlistComponent } from './registeredlist.component';

describe('RegisteredlistComponent', () => {
  let component: RegisteredlistComponent;
  let fixture: ComponentFixture<RegisteredlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
