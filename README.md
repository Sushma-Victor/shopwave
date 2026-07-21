ShopWave 🛍️

ShopWave is a front-end e-commerce web app built with React. It gives users a modern online storefront experience — browsing products and signing up for an account — all wrapped in a clean, responsive UI.

Note: This project currently includes a signup form on the front end. It is not yet connected to a backend/database, so accounts are not persisted.

Features
Responsive storefront UI built with React and React-Bootstrap
User signup form
Component-based architecture for easy extension (product listings, cart, checkout, etc.)
Tech Stack
React (Create React App)
React-Bootstrap for UI components
CSS for custom styling
Getting Started

This project was bootstrapped with Create React App.

Prerequisites
Node.js (v16 or later recommended)
npm (comes with Node.js)
Installation
bash
git clone https://github.com/Sushma-Victor/shopwave.git
cd shopwave
npm install
Running Locally
bash
npm start

Runs the app in development mode. Open http://localhost:3000 to view it in your browser. The page reloads automatically when you make changes, and lint errors (if any) will show in the console.

Available Scripts

In the project directory, you can run:

Command	Description
npm start	Runs the app in development mode at localhost:3000
npm test	Launches the test runner in interactive watch mode
npm run build	Builds the app for production to the build folder, minified and optimized
npm run eject	Copies all config files and dependencies into the project for full control (⚠️ one-way operation)
Deployment

This app is deployed on Vercel. To deploy your own copy:

Fork or clone this repo
Import it into Vercel (or Netlify)
Vercel will auto-detect the Create React App setup — build command npm run build, output directory build
Deploy, and you'll get a live shareable link

For more general deployment options, see the CRA deployment docs.

Roadmap
 Connect signup form to a backend/database
 Add product catalog and detail pages
 Shopping cart functionality
 Checkout flow
Learn More
Create React App documentation
React documentation
License

This project currently has no license specified.
