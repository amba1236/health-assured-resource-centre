import { useState } from 'react';
import './index.css';

import { resources } from './data/resources';
import { groupResources } from './utils/groupResources';
import ResourceSection from './components/ResourceSection';
import type { Resource } from './types/resource';
import ResourceModal from './components/ResourceModal';
import Header from './components/Header';

function App() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null,
  );
  const grouped = groupResources(resources);

  return (
    <main className='min-h-screen bg-slate-50'>
      <div className='mx-auto max-w-7xl px-6 py-10'>
        <Header />
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
