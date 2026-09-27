import { describe, expect, it } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('returns a greeting', () => {
    expect(greet('${{ values.name }}')).toBe('Hello from ${{ values.name }}');
  });
});
