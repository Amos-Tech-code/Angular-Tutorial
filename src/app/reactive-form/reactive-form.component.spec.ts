import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormComponent } from './reactive-form.component';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update the value of the input field', () => {
    const input = fixture.nativeElement.querySelector('input');

    const event = new Event('input');
    input.value = 'Red';
    input.dispatchEvent(event);

    expect(component.favouriteColorControl.value).toEqual('Red');
  });

  it('should update the value in the control', () => {
    component.favouriteColorControl.setValue('Red');

    const input = fixture.nativeElement.querySelector('input');
    expect(input.value).toEqual('Red');

  })
});
