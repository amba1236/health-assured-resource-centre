type HeaderProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  sortOrder: 'newest' | 'oldest';
  onSortChange: (value: 'newest' | 'oldest') => void;
};

export default function Header({
  searchTerm,
  onSearchChange,
  sortOrder,
  onSortChange,
}: HeaderProps) {
  return (
    <header className='mb-10 pb-6'>
      <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
        <p className='text-sm font-semibold uppercase tracking-wider text-emerald-600'>
          Health Assured
        </p>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
          <div className='flex items-center gap-3'>
            <label
              htmlFor='search'
              className='whitespace-nowrap text-sm font-medium text-slate-700'
            >
              Search
            </label>
            <input
              id='search'
              type='text'
              placeholder='Search by title or tag...'
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              className='w-72 rounded-lg border border-slate-300 px-4 py-2 focus:border-emerald-500 focus:outline-none'
            />
          </div>
          <div className='flex items-center gap-3'>
            <label
              htmlFor='sort'
              className='whitespace-nowrap text-sm font-medium text-slate-700'
            >
              Sort
            </label>
            <select
              id='sort'
              value={sortOrder}
              onChange={(event) =>
                onSortChange(event.target.value as 'newest' | 'oldest')
              }
              className='rounded-lg border border-slate-300 px-4 py-2 focus:border-emerald-500 focus:outline-none'
            >
              <option value='newest'>Newest first</option>
              <option value='oldest'>Oldest first</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
