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
    <header className='mb-10 border-b border-slate-200 pb-6'>
      <div className='max-w-3xl'>
        <p className='text-sm font-semibold uppercase tracking-wider text-emerald-600'>
          Health Assured
        </p>
        <div className='mt-6 grid gap-4 md:grid-cols-2'>
          <div>
            <label
              htmlFor='search'
              className='mb-2 block text-sm font-medium text-slate-700'
            >
              Search
            </label>
            <input
              id='search'
              type='text'
              placeholder='Search by title or tag...'
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              className='w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none'
            />
          </div>
          <div>
            <label
              htmlFor='sort'
              className='mb-2 block text-sm font-medium text-slate-700'
            >
              Sort by date
            </label>
            <select
              id='sort'
              value={sortOrder}
              onChange={(event) =>
                onSortChange(event.target.value as 'newest' | 'oldest')
              }
              className='w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none'
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
