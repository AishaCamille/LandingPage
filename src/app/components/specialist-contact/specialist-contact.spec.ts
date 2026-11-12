import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecialistContact } from './specialist-contact';

describe('SpecialistContact', () => {
  let component: SpecialistContact;
  let fixture: ComponentFixture<SpecialistContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialistContact],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialistContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
