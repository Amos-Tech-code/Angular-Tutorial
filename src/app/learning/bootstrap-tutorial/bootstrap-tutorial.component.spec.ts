import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTutorialComponent } from './bootstrap-tutorial.component';

describe('BootstrapTutorialComponent', () => {
  let component: BootstrapTutorialComponent;
  let fixture: ComponentFixture<BootstrapTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapTutorialComponent]
    });
    fixture = TestBed.createComponent(BootstrapTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
