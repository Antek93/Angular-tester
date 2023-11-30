import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaContattiComponent } from './elimina-contatti.component';

describe('EliminaContattiComponent', () => {
  let component: EliminaContattiComponent;
  let fixture: ComponentFixture<EliminaContattiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminaContattiComponent]
    });
    fixture = TestBed.createComponent(EliminaContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
