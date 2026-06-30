import { useState } from 'react';
import './index.css';

import { resources } from './data/resources';
import { groupResources } from './utils/groupResources';
import ResourceSection from './components/ResourceSection';
import type { Resource } from './types/resource';
import ResourceModal from './components/ResourceModal';
import Header from './components/Header';
import { filterResources } from './utils/filterResources';
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

  return (
    <main className='min-h-screen bg-slate-50'>
      <div className='mx-auto max-w-7xl px-6 py-10'>
        <Header
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
        />
        {Object.entries(grouped).map(([category, items]) => (
          <ResourceSection
            key={category}
            category={category}
            items={items}
            onSelect={setSelectedResource}
          />
        ))}
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
