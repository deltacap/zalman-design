# Zalman Design - Enterprise Design & Production

A premium, Apple-inspired website for Zalman Design, showcasing their expertise in enterprise design and production while facilitating meaningful connections with potential clients.

## Features

- Modern, clean design with Apple-inspired aesthetics
- React-based architecture with component-driven development
- Interactive animations and microinteractions using Framer Motion
- Particle animation background and decorative elements
- Fully responsive for all device sizes
- Accessible and performance-optimized

## Tech Stack

- React 18
- Styled Components for component-based styling
- Framer Motion for animations
- Intersection Observer for scroll-based animations
- Modern CSS with custom properties
- Font Awesome for icons
- Google Fonts (SF Pro Display inspired typography)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the site in your browser

## Project Structure

The project follows a component-based architecture:

```
src/
├── components/         # UI components organized by section
│   ├── Header/         # Navigation and header components
│   ├── Hero/           # Hero section with particles animation
│   ├── Services/       # Services showcase
│   ├── Portfolio/      # Portfolio with filtering
│   ├── Clients/        # Client logos and testimonials
│   ├── About/          # Company information with tabs
│   ├── Contact/        # Contact form and information
│   ├── Footer/         # Site footer
│   └── Loader/         # Initial page loader
├── animations/         # Animation components
│   └── ParticlesBackground.js
├── styles/             # Global styles
│   └── global.css      # Global CSS variables and base styles
├── App.js              # Main application component
└── index.js            # Application entry point
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Created with ❤️ by Zalman Design