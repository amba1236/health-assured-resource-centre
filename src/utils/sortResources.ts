import type { Resource } from '../types/resource';

type SortOrder = 'newest' | 'oldest';

export function sortResources(
  resources: Resource[],
  order: SortOrder,
): Resource[] {
  return [...resources].sort((a, b) => {
    const first = new Date(a.date_uploaded).getTime();
    const second = new Date(b.date_uploaded).getTime();

    return order === 'newest'
      ? second - first
      : first - second;
  });
}