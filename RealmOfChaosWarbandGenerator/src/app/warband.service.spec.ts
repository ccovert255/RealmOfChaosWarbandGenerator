import { TestBed } from '@angular/core/testing';
import { Profile, Weapon, Armor, ChaosAttribute } from './shared/models';
import { ChaosGod } from './shared/enums';
import { CreateWarbandRequest, WarbandService } from './warband.service';

describe('WarbandService', () => {
  let service: WarbandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarbandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate random numbers', () => {
    let request = new CreateWarbandRequest();
    request.championName = "test chamption";
    request.chaosGod = ChaosGod.Khorne;
    request.seed = "test";

    let result = service.createWarband(request);
    expect(result.championName).toBe(request.championName);
    expect(result.chaosGod).toBe(request.chaosGod);
    expect(result.seed).toBe(request.seed);
    expect(result.equipmentPoints).toBeGreaterThan(0);
  });



});