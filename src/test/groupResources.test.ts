import { describe, it, expect } from 'vitest';
import { groupResources } from '../utils/groupResources';

describe('groupResources', () => {
  it('groups resources by category', () => {
    const input = [
      {
        id: '1',
        category: 'Articles',
        title: 'Test Article',
        thumbnail: '',
        tags: ['test'],
        duration: 5,
        description: '',
        date_uploaded: '2025-01-01',
      },
      {
        id: '2',
        category: 'Podcasts',
        title: 'Test Podcast',
        thumbnail: '',
        tags: ['test'],
        duration: 10,
        description: '',
        date_uploaded: '2025-01-01',
      },
    ];

    const result = groupResources(input);

    expect(result).toEqual({
      Articles: [input[0]],
      Podcasts: [input[1]],
    });
  });
});