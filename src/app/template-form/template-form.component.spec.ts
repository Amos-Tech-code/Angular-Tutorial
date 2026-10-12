import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { TemplateFormComponent } from './template-form.component';

describe('TemplateFormComponent', () => {
  let component: TemplateFormComponent;
  let fixture: ComponentFixture<TemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update favorite color in the component', fakeAsync( () => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'Red';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(component.favoriteColor).toEqual('Red');
  }));

});
