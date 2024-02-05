import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFichierComponent } from './new-fichier.component';

describe('NewFichierComponent', () => {
  let component: NewFichierComponent;
  let fixture: ComponentFixture<NewFichierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFichierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
