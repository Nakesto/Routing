import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatakuliahListComponent } from './matakuliah-list.component';

describe('MatakuliahListComponent', () => {
  let component: MatakuliahListComponent;
  let fixture: ComponentFixture<MatakuliahListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatakuliahListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatakuliahListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
