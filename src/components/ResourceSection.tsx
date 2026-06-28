import type { Resource } from '../types/resource';
import ResourceCard from './ResourceCard';

type Props = {
  category: string;
  items: Resource[];
};

export default function ResourceSection({ category, items }: Props) {
  return (
    <section className='mb-8'>
      <h2 className='text-2xl font-bold mb-4'>{category}</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {items.map((item) => (
          <ResourceCard key={item.id} resource={item} />
        ))}
      </div>
    </section>
  );
}
