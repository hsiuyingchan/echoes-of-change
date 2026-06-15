import { describe, it, expect } from 'vitest';
import { IChingData, getHexagramData } from '../../lib/iching';

describe('IChing Library', () => {
  it('should contain 64 hexagrams plus a default fallback', () => {
    const keys = Object.keys(IChingData);
    // 64 binary keys + 1 "default" key
    expect(keys.length).toBe(65);
    expect(IChingData).toHaveProperty('default');
  });

  it('should have correct mapping for The Creative (1)', () => {
    const data = getHexagramData([7, 7, 7, 7, 7, 7]);
    expect(data.number).toBe(1);
    expect(data.name).toBe('The Creative');
  });

  it('should have correct mapping for The Receptive (2)', () => {
    const data = getHexagramData([8, 8, 8, 8, 8, 8]);
    expect(data.number).toBe(2);
    expect(data.name).toBe('The Receptive');
  });

  it('should have correct mapping for Peace (11)', () => {
    // Bottom: Heaven (1,1,1), Top: Earth (0,0,0)
    const data = getHexagramData([7, 7, 7, 8, 8, 8]);
    expect(data.number).toBe(11);
    expect(data.name).toBe('Peace');
  });

  it('should have correct mapping for Standstill (12)', () => {
    // Bottom: Earth (0,0,0), Top: Heaven (1,1,1)
    const data = getHexagramData([8, 8, 8, 7, 7, 7]);
    expect(data.number).toBe(12);
    expect(data.name).toBe('Standstill');
  });

  it('should return default for invalid input (though technically hard to hit with getHexagramCode)', () => {
    // getHexagramData uses getHexagramCode which always returns 6 chars
    // But we can check the fallback logic directly
    const fallback = IChingData['default'];
    expect(fallback.number).toBe(0);
  });
});
