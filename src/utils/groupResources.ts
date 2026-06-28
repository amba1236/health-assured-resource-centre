import type { Resource } from '../types/resource';

export function groupResources(resources: Resource[]) {
  return resources.reduce<Record<string, Resource[]>>((acc, resource) => {
    const { category } = resource;

    acc[category] = acc[category] ?? [];
    acc[category].push(resource);

    return acc;
  }, {});
}