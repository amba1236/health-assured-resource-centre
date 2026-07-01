import type { Resource } from '../types/resource';

type Props = {
  resource: Resource;
  onClick: () => void;
};

export default function ResourceCard({ resource, onClick }: Props) {
  return (
    <article
      onClick={onClick}
      className='flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg'
    >
      <img
        src={resource.thumbnail}
        alt={resource.title}
        className='h-48 w-full object-cover'
      />
      <div className='flex flex-1 flex-col p-5'>
        <span className='mb-3 w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700'>
          {resource.duration} min
        </span>
        <h3 className='mb-4 text-lg font-semibold text-slate-900'>
          {resource.title}
        </h3>
        <div className='mt-auto flex flex-wrap gap-2'>
          {resource.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className='rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
