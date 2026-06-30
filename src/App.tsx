import { useState } from 'react';
import './index.css';

import Header from './components/Header';
import ResourceModal from './components/ResourceModal';
import ResourceSection from './components/ResourceSection';
import { resources } from './data/resources';
import type { Resource } from './types/resource';
import { filterResources } from './utils/filterResources';
import { groupResources } from './utils/groupResources';
import { sortResources } from './utils/sortResources';

function App() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null,
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const filteredResources = filterResources(resources, searchTerm);
  const sortedResources = sortResources(filteredResources, sortOrder);
  const grouped = groupResources(sortedResources);
  const groupedEntries = Object.entries(grouped);

  return (
    <main className='min-h-screen bg-slate-50'>
      <div className='mx-auto max-w-7xl px-6 py-10'>
        <Header
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
        />
        {groupedEntries.length === 0 ? (
          <div className='py-16 text-center'>
            <h2 className='text-xl font-semibold text-slate-700'>
              No resources found
            </h2>
            <p className='mt-2 text-slate-500'>
              Try searching for another title or tag.
            </p>
          </div>
        ) : (
          groupedEntries.map(([category, items]) => (
            <ResourceSection
              key={category}
              category={category}
              items={items}
              onSelect={setSelectedResource}
            />
          ))
        )}
        {selectedResource && (
          <ResourceModal
            resource={selectedResource}
            onClose={() => setSelectedResource(null)}
          />
        )}
      </div>
    </main>
  );
}

export default App;
