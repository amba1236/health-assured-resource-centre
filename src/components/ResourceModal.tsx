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
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4'
      onClick={onClose}
    >
      <div
        className='max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl'
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className='h-64 w-full border-b border-slate-200 object-cover'
        />
        <div className='p-6'>
          <span className='inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700'>
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
                className='rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700'
              >
                {tag}
              </span>
            ))}
          </div>
          <div className='mt-8 grid grid-cols-2 gap-4'>
            <div className='rounded-xl bg-slate-50 p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>
                Duration
              </p>
              <p className='mt-1 text-lg font-semibold text-slate-900'>
                {resource.duration} min
              </p>
            </div>
            <div className='rounded-xl bg-slate-50 p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>
                Uploaded
              </p>
              <p className='mt-1 text-lg font-semibold text-slate-900'>
                {resource.date_uploaded}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className='mt-8 w-full rounded-xl bg-emerald-600 py-3 font-medium text-white transition hover:bg-emerald-700'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
