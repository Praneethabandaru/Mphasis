import { TestBed } from '@angular/core/testing';

import { StudentsDetService } from './students-det.service';

describe('StudentsDetService', () => {
  let service: StudentsDetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsDetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
