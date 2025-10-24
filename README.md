# 🎸 GuitarLA

A modern, responsive e-commerce web application for a premium guitar shop featuring signature guitars inspired by legendary artists. Built with React and Vite.

🌐 **[Live Demo](https://astabile-react-guitarla.netlify.app/)**

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [SEO Optimization](#seo-optimization)
- [Deployment](#deployment)
- [Author](#author)
- [License](#license)

## 🎯 About

GuitarLA is a single-page application (SPA) showcasing a curated collection of premium guitars inspired by legendary guitarists including Stevie Ray Vaughan, Kurt Cobain, Steve Vai, Jack White, Lou Reed, and more. Each guitar is crafted to deliver authentic tones and exceptional playability for rock, blues, jazz, and alternative music.

## ✨ Features

- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **Shopping Cart** - Add, remove, and manage guitar selections with quantity controls
- **Local Storage** - Cart persists between sessions using browser localStorage
- **SEO Optimized** - Comprehensive meta tags, Open Graph, Twitter Cards, and Schema.org structured data
- **Fast Performance** - Built with Vite for lightning-fast HMR and optimized builds
- **Modern UI** - Clean, professional interface with custom fonts (Outfit)
- **12 Signature Models** - Each guitar with unique descriptions inspired by legendary artists

### Guitar Collection

| Model | Artist Inspiration | Price | Style |
|-------|-------------------|-------|-------|
| Lukather | Steve Lukather | $349 | Rock/Jazz Fusion |
| SRV | Stevie Ray Vaughan | $499 | Texas Blues |
| Borland | Wes Borland | $299 | Nu-Metal |
| VAI | Steve Vai | $449 | Virtuoso Rock |
| Thompson | Richard Thompson | $329 | Folk Rock |
| White | Jack White | $379 | Garage Rock |
| Cobain | Kurt Cobain | $479 | Grunge |
| Dale | Dick Dale | $389 | Surf Rock |
| Krieger | Robby Krieger | $359 | Psychedelic Rock |
| Campbell | Glen Campbell | $339 | Country Rock |
| Reed | Lou Reed | $399 | Art Rock |
| Hazel | Eddie Hazel | $369 | Funk |

## 🛠 Technologies

- **React** 18.3.1 - UI library for building interactive interfaces
- **Vite** 6.0.5 - Next-generation frontend build tool
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Custom styling with responsive design
- **LocalStorage API** - Client-side data persistence
- **Google Fonts** - Outfit font family

### Development Tools

- **ESLint** - Code linting and quality checks
- **@vitejs/plugin-react-swc** - Fast Refresh with SWC compiler
- **Vite Plugin React** - Official React plugin for Vite

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/astabile/react-guitarLA.git
   cd React-GuitarLA
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📁 Project Structure

```
React-GuitarLA/
├── public/
│   ├── img/                    # Guitar images and assets
│   │   ├── guitar_01.jpg
│   │   ├── guitar_02.jpg
│   │   └── ...
│   └── .htaccess              # Apache server configuration
├── src/
│   ├── components/
│   │   ├── Guitar.jsx         # Individual guitar card component
│   │   └── Header.jsx         # Header with cart functionality
│   ├── data/
│   │   └── db.js              # Guitar catalog data
│   ├── App.jsx                # Main application component
│   ├── index.css              # Global styles
│   └── main.jsx               # Application entry point
├── index.html                 # HTML template with SEO meta tags
├── vite.config.js             # Vite configuration
├── vercel.json                # Vercel deployment config
├── package.json               # Project dependencies
└── README.md                  # Project documentation
```

## 🔍 SEO Optimization

GuitarLA is fully optimized for search engines and social media sharing:

### Meta Tags
- **Title Tag** - Keyword-rich, descriptive title
- **Meta Description** - Compelling description with relevant keywords
- **Keywords** - Comprehensive keyword list including artist names and music genres
- **Canonical URL** - Prevents duplicate content issues

### Social Media
- **Open Graph Tags** - Optimized for Facebook, LinkedIn
- **Twitter Cards** - Large image cards for Twitter sharing
- **og:image** - Featured header image for social previews

### Structured Data
- **Schema.org JSON-LD** - Store and Product catalog markup
- Helps search engines understand your business
- Enables rich snippets in search results

### HTTP Headers
- **X-Robots-Tag** - `index, follow` configured in vite.config.js
- Additional security headers included (X-Content-Type-Options, X-Frame-Options, etc.)

### Performance
- Fast loading times with Vite optimization
- Image optimization
- Font preconnect for Google Fonts
- Efficient component rendering

## 🌐 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

The `vercel.json` file is already configured with proper headers.

### Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `dist`

Custom headers are configured in `public/_headers` (if you recreate it).

### Traditional Hosting (Apache)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `dist/` folder** to your web server

3. The `.htaccess` file in `public/` will be included in the build and handle:
   - Custom headers (X-Robots-Tag)
   - SPA routing
   - Gzip compression
   - Browser caching

### Testing Deployment

After deployment, verify headers:
```bash
curl -I https://yourwebsite.com
```

Check for `X-Robots-Tag: index, follow` in response headers.

### Features
- Browse complete guitar collection
- Detailed product information for each model
- Shopping cart with quantity management
- Responsive design for all devices

## 🎨 Customization

### Update Guitar Collection

Edit `src/data/db.js` to modify:
- Guitar names and descriptions
- Prices
- Image references
- Artist information

### Styling

Main styles are in `src/index.css`. The app uses:
- CSS custom properties for theming
- Flexbox and Grid for layouts
- Mobile-first responsive design

### SEO Configuration

Update SEO settings in `index.html`:
- Meta descriptions
- Keywords
- Open Graph images
- Site URLs

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Author

**Alejandro Stábile**

- GitHub: [@astabile](https://github.com/astabile)

## 📝 License

This project is [MIT](LICENSE) licensed.

---

## 🔧 Technical Details

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### React Hooks Used

- `useState` - Managing cart and guitar state
- `useEffect` - LocalStorage synchronization and side effects
- `useMemo` - Performance optimization for computed values

### Key Features Implementation

**Shopping Cart Logic:**
- Add to cart with duplicate detection
- Increment/decrement quantities (max: 5)
- Remove items
- Calculate totals
- Clear entire cart
- Persistent storage via localStorage

**Component Architecture:**
- Functional components with hooks
- Props-based communication
- Reusable Guitar component
- Centralized state management

---

Made with ❤️ and React

**⭐ If you like this project, please give it a star!**