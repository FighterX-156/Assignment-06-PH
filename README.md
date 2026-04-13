# FighterX-156: Premium Digital Tools Marketplace

A modern, high-performance React application designed to showcase and sell curated digital tools. This project features a dynamic shopping experience, transparent pricing models, and a streamlined onboarding process.

## 🚀 Key Features

- **Dynamic Product Catalog**: Real-time product listing fetched from an asynchronous data source, featuring "Popular", "New", and "Best Seller" tags.
- **Interactive Shopping Cart**: Users can seamlessly add products to their cart, view a summarized list, and proceed to checkout with real-time price calculation.
- **Tiered Pricing Plans**: A transparent comparison of "Basic", "Pro", and "Ultra Pro Max" plans to help users choose the best fit for their needs.
- **Streamlined Workflow**: A 3-step onboarding guide helping users from account creation to productive creation.
- **Rich Notifications**: Real-time feedback for user actions (Add to Cart, Delete, etc.) using `React-Toastify`.
- **Responsive & Premium UI**: Built with a "mobile-first" approach using Tailwind CSS and DaisyUI, ensuring a sleek experience across all devices.

## 🛠️ Tech Stack

- **Core**: React 19, Vite (Lightning-fast builds and HMR)
- **State Management**: React `useState` and `Suspense` for modern asynchronous data handling.
- **Styling**: Tailwind CSS (Utility-first CSS), DaisyUI (Component library).
- **Notifications**: React Toastify.
- **Data Source**: Local JSON-based API simulation.

## 🩹 Bugs & Challenges Resolved

During development, several critical issues were identified and resolved to ensure a stable user experience:

1. **White Screen Crash (Fetch Mismatch)**: Resolved a critical bug where an incorrect file path for pricing data (`pricingData.json` vs `pricedata.json`) was causing the application to fail upon loading.
2. **UI Flickering (Promise Stabilization)**: Fixed a logic error where data-fetching promises were being re-initialized inside the component body, causing the UI to reset on every cart update. Promises are now stabilized outside the component tree.
3. **Component Naming Standard**: Performed a project-wide refactor to move from lowercase to **PascalCase** for all component files, resolving potential deployment issues on case-sensitive systems.
4. **Syntax Integrity**: Fixed multiple broken component closing tags and missing React imports (e.g., `Suspense`).

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

---
*Created as part of Assignment-06-PH.*
