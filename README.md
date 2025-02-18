# Pico-Torrent

## Overview

Pico-Torrent is a Node.js application built with Express and EJS that allows users to search for data and view detailed information about individual items. The application supports both light and dark mode, with styles adapting based on the user's system preferences.

## Features

- Search functionality for querying data.
- Detailed view for individual items including file information.
- Light and dark mode support.
- Responsive design.

## Project Structure

```
.
├── views
│   ├── index.ejs
│   ├── search.ejs
│   ├── details.ejs
├── public
│   ├── index.css
│   ├── search.css
│   ├── details.css
│   ├── script.js
│   ├── search.js
├── server.js
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/api-data-display.git
   cd api-data-display
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Home Page

The home page contains a simple search input where users can enter a query to search for data.

### Search Results

The search results page displays the results of the query, including category, name, added date, size, seeders, leechers, etc. Pagination is provided to navigate through the results.

### Details Page

The details page provides detailed information about a specific item, including its files, size, seeders, leechers, and other metadata.

## Adding Styles

Styles are defined in CSS files located in the `public` directory. The project supports light and dark modes using the `prefers-color-scheme` media query.

### Example Styles

#### Light Mode
```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --body-bg: #f8f9fa;
    --body-color: #212529;
    /* ... other variables ... */
}
```

#### Dark Mode
```css
@media (prefers-color-scheme: dark) {
    :root {
        --body-bg: #333;
        --body-color: #fff;
        /* ... other variables ... */
    }
}
```

## JavaScript

JavaScript files are located in the `public` directory and include functions for handling search and navigation.

### Example Function
```js
function make_search_url(q, page = 1, cat = "") {
    return "/search?q=" + encodeURIComponent(q) + "&page=" + page + "&cat=" + cat;
}
```

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

