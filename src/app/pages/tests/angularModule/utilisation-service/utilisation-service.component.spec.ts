import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisationServiceComponent } from './utilisation-service.component';

describe('UtilisationServiceComponent', () => {
  let component: UtilisationServiceComponent;
  let fixture: ComponentFixture<UtilisationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilisationServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
