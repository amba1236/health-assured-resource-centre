import type { Resource } from '../types/resource';
import ResourceCard from './ResourceCard';

type Props = {
  category: string;
  items: Resource[];
  onSelect: (resource: Resource) => void;
};

export default function ResourceSection({ category, items, onSelect }: Props) {
  return (
    <section className='mb-12'>
      <div className='mb-6 border-b border-slate-200 pb-2'>
        <h2 className='text-2xl font-bold text-slate-800'>{category}</h2>
        <p className='mt-1 text-sm text-slate-500'>
          {items.length} item{items.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {items.map((item) => (
          <ResourceCard
            key={item.id}
            resource={item}
            onClick={() => onSelect(item)}
          />
        ))}
      </div>
    </section>
  );
}
