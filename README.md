# Health Assured Resource Centre

A responsive React application for browsing wellbeing resources. Resources are grouped by category and can be searched, sorted, and viewed in a detailed modal.

## Features

- Display resources grouped by category
- Search resources by title or tags
- Sort resources by upload date (Newest or Oldest)
- Responsive card layout
- Resource details modal
- Reusable React components
- Utility functions with unit tests
- Built with TypeScript and Tailwind CSS

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Vitest

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/amba1236/health-assured-resource-centre.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```
http://localhost:5173
```

## Available Scripts

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run unit tests:

```bash
npm run test
```

Run the linter:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
├── data/
├── test/
├── types/
├── utils/
├── App.tsx
├── index.css
└── main.tsx
```

## Key Functionality

### Resource Listing

Resources are displayed as reusable cards grouped by category.

### Search

Resources can be filtered by:

- Title
- Tags

### Sorting

Resources can be sorted by upload date:

- Newest first
- Oldest first

### Resource Modal

Selecting a resource opens a modal displaying:

- Image
- Category
- Description
- Tags
- Duration
- Upload date

## Testing

Utility functions are covered with unit tests using Vitest, including:

- Resource grouping
- Resource filtering
- Resource sorting

## Future Improvements

- Pagination or infinite scrolling
- Category filters
- Allow users to bookmark or favourite resources.
- Keyboard navigation for the modal
- API integration instead of local mock data
- Support dark mode
- Add resource sharing functionality

## Author

Amena
