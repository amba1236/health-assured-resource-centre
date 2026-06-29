import type { Resource } from '../types/resource';

type Props = {
  resource: Resource;
  onClick: () => void;
};

export default function ResourceCard({ resource, onClick }: Props) {
  return (
    <article
      onClick={onClick}
      className='cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg'
    >
      <img
        src={resource.thumbnail}
        alt={resource.title}
        className='h-48 w-full object-cover'
      />
      <div className='p-5'>
        <div className='mb-3 flex items-center justify-between'>
          <span className='rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700'>
            {resource.duration} min
          </span>
        </div>
        <h3 className='mb-3 text-lg font-semibold text-slate-900'>
          {resource.title}
        </h3>
        <div className='flex flex-wrap gap-2'>
          {resource.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className='rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600'
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
