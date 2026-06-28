import type { Resource } from '../types/resource';

type Props = {
  resource: Resource;
};

export default function ResourceCard({ resource }: Props) {
  return (
    <div className='border rounded-lg p-4 shadow-sm bg-white'>
      <img
        src={resource.thumbnail}
        alt={resource.title}
        className='w-full h-40 object-cover rounded'
      />

      <h3 className='mt-2 font-semibold text-lg'>{resource.title}</h3>

      <p className='text-sm text-gray-600'>{resource.duration} min</p>

      <div className='flex gap-2 mt-2 flex-wrap'>
        {resource.tags.slice(0, 3).map((tag) => (
          <span key={tag} className='text-xs bg-gray-200 px-2 py-1 rounded'>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
