import { TestBed } from '@angular/core/testing';

import { ApiTalkService } from './api-talk.service';

describe('ApiTalkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiTalkService = TestBed.get(ApiTalkService);
    expect(service).toBeTruthy();
  });
});
