import type { Resource } from '../types/resource';

export function filterResources(
  resources: Resource[],
  searchTerm: string,
): Resource[] {
  const query = searchTerm.trim().toLowerCase();

  if (!query) {
    return resources;
  }

  return resources.filter((resource) => {
    const matchesTitle = resource.title.toLowerCase().includes(query);

    const matchesTags = resource.tags.some((tag) =>
      tag.toLowerCase().includes(query),
    );

    return matchesTitle || matchesTags;
  });
}
