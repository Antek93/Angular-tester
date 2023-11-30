import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaContattiComponent } from './modifica-contatti.component';

describe('ModificaContattiComponent', () => {
  let component: ModificaContattiComponent;
  let fixture: ComponentFixture<ModificaContattiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificaContattiComponent]
    });
    fixture = TestBed.createComponent(ModificaContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
