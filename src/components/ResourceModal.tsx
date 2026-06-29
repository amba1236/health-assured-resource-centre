import type { Resource } from '../types/resource';

type ResourceModalProps = {
  resource: Resource;
  onClose: () => void;
};

const categoryIcons: Record<string, string> = {
  Podcasts: '🎧',
  Articles: '📄',
  Newsletters: '📰',
  Recipes: '🥗',
  Fitness: '💪',
  Meditation: '🧘',
};

export default function ResourceModal({
  resource,
  onClose,
}: ResourceModalProps) {
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'
      onClick={onClose}
    >
      <div
        className='w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-xl'
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className='h-64 w-full object-cover'
        />
        <div className='p-6'>
          <span className='inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700'>
            {categoryIcons[resource.category]} {resource.category}
          </span>
          <h2 className='mt-4 text-2xl font-bold text-slate-900'>
            {resource.title}
          </h2>
          <p className='mt-4 leading-7 text-slate-600'>
            {resource.description}
          </p>
          <div className='mt-6 flex flex-wrap gap-2'>
            {resource.tags.map((tag) => (
              <span
                key={tag}
                className='rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600'
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className='mt-6 space-y-1 text-sm text-slate-500'>
            <p>
              <strong>Duration:</strong> {resource.duration} minutes
            </p>
            <p>
              <strong>Uploaded:</strong> {resource.date_uploaded}
            </p>
          </div>
          <button
            onClick={onClose}
            className='mt-8 w-full rounded-lg bg-slate-900 py-3 font-medium text-white transition hover:bg-slate-700'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
