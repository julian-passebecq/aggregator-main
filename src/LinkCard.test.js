import { describe, expect, it } from '@jest/globals';
import { getDaysAgo } from './LinkCard';

describe('getDaysAgo', () => {
  it('returns "today" for current date', () => {
    const today = new Date();
    expect(getDaysAgo(today)).toBe('today');
  });

  it('returns "1 day ago" for yesterday', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(getDaysAgo(yesterday)).toBe('1 day ago');
  });

  it('returns "n days ago" for multiple days', () => {
    const past = new Date();
    past.setDate(past.getDate() - 5);
    expect(getDaysAgo(past)).toBe('5 days ago');
  });
});
