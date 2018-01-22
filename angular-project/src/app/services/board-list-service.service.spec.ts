import { TestBed, inject } from '@angular/core/testing';

import { BoardListServiceService } from './board-list-service.service';

describe('BoardListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardListServiceService]
    });
  });

  it('should be created', inject([BoardListServiceService], (service: BoardListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
