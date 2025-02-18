# Pico-Torrent

## Overview

Pico-Torrent is a modern, fast, and user-friendly torrent search engine built with Node.js and Express. It features a responsive design, real-time search suggestions, infinite scrolling, and both light and dark mode support.

## Features

- **Modern Search Interface**
  - Real-time search suggestions
  - Category filtering
  - Keyboard shortcuts (press `/` to focus search)
  - Instant search results

- **Advanced Results Management**
  - Infinite scroll loading
  - Smart sorting (by name, seeders, leechers, size, date)
  - Client-side caching for better performance
  - Responsive table layout

- **User Experience**
  - Light and dark mode support
  - Loading indicators
  - Mobile-friendly design
  - Clean and modern UI

- **Performance**
  - Client-side caching
  - Compressed responses
  - Rate limiting
  - Security headers

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pico-torrent.git
   cd pico-torrent
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
.
├── server.js           # Express server and API endpoints
├── helper.js           # Utility functions
├── views/
│   ├── index.ejs      # Home page
│   ├── search.ejs     # Search results page
│   ├── details.ejs    # Torrent details page
│   ├── error.ejs      # Error page
│   ├── 404.ejs        # Not found page
│   └── components/    # Reusable components
│       └── loading.ejs
├── public/
│   ├── style.css      # Global styles
│   └── images/        # Static images
└── README.md
```

## Usage

### Home Page
- Use the search bar to find torrents
- Select a category to filter results
- Press `/` to quickly focus the search input

### Search Results
- Results load automatically as you scroll
- Sort results by:
  - Name
  - Seeders
  - Leechers
  - Size
  - Date Added
- Click the sort direction button to toggle ascending/descending
- Use search suggestions for quick navigation

### Details Page
- View comprehensive torrent information
- See file listings
- Get magnet links
- Quick navigation back to search results

## Styling

The application uses CSS variables for theming, supporting both light and dark modes:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #64748b;
  --body-bg: #f1f5f9;
  --text-color: #1e293b;
  /* ... other variables ... */
}

@media (prefers-color-scheme: dark) {
  :root {
    --body-bg: #0f172a;
    --text-color: #f8fafc;
    /* ... dark mode overrides ... */
  }
}
```

## Security

The application implements several security measures:

- Helmet.js for security headers
- Rate limiting
- Input sanitization
- Secure HTTP headers
- XSS protection

## Performance Optimizations

- Client-side caching of search results
- Debounced search
- Infinite scroll with intersection observer
- Compressed responses
- Optimized sorting algorithms

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

