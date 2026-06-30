import { describe, expect, it } from 'vitest';
import { sortResources } from '../utils/sortResources';
import type { Resource } from '../types/resource';

const resources: Resource[] = [
  {
    id: '1',
    category: 'Articles',
    title: 'Older',
    thumbnail: '',
    tags: [],
    duration: 5,
    description: '',
    date_uploaded: '2025-01-01',
  },
  {
    id: '2',
    category: 'Articles',
    title: 'Newest',
    thumbnail: '',
    tags: [],
    duration: 5,
    description: '',
    date_uploaded: '2025-08-01',
  },
];

describe('sortResources', () => {
  it('sorts resources by newest first', () => {
    const result = sortResources(resources, 'newest');

    expect(result[0].title).toBe('Newest');
    expect(result[1].title).toBe('Older');
  });
});