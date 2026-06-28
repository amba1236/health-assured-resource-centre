import './index.css';

import { resources } from './data/resources';
import { groupResources } from './utils/groupResources';
import ResourceSection from './components/ResourceSection';

function App() {
  const grouped = groupResources(resources);

  return (
    <main className='p-6 bg-gray-50 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6'>Resource Centre</h1>

      {Object.entries(grouped).map(([category, items]) => (
        <ResourceSection key={category} category={category} items={items} />
      ))}
    </main>
  );
}

export default App;
