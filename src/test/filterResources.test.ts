import { describe, expect, it } from 'vitest';
import { filterResources } from '../utils/filterResources';
import type { Resource } from '../types/resource';

const resources: Resource[] = [
  {
    id: '1',
    category: 'Articles',
    title: 'Healthy Sleep',
    thumbnail: '',
    tags: ['sleep', 'health'],
    duration: 5,
    description: '',
    date_uploaded: '2025-07-01',
  },
  {
    id: '2',
    category: 'Podcasts',
    title: 'Mindfulness Basics',
    thumbnail: '',
    tags: ['mindfulness', 'relax'],
    duration: 10,
    description: '',
    date_uploaded: '2025-07-02',
  },
];

describe('filterResources', () => {
  it('filters resources by title', () => {
    const result = filterResources(resources, 'sleep');

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('Healthy Sleep');
  });

  it('filters resources by tag', () => {
    const result = filterResources(resources, 'mindfulness');

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('Mindfulness Basics');
  });

  it('returns all resources when search term is empty', () => {
    const result = filterResources(resources, '');

    expect(result).toHaveLength(2);
  });
});
