# Chuks Kitchen - Digital Restaurant Web Application

## 🔗 Live Preview

> **Live Site URL:** [Add your Netlify deployment link here]

---

## Project Overview

This project is a **Food Ordering & Customer Management System** developed for **Mr. Chukwudi Okorie (Mr. Chuks)**, the owner of **Chuks Kitchen**, a Nigerian restaurant specializing in authentic local dishes. The project was developed by **TrueMinds Innovations Ltd** to digitize the food business, allowing customers to register, browse meals, place orders, and track activity online.

### What Was Built

The web application consists of **5 main screens**:

1. **Landing Page (Hero Screen)** - The initial landing page with a hero section showcasing the restaurant's welcome message and call-to-action buttons
2. **Sign Up Page** - Registration form for new customers to create an account
3. **Log In Page** - Authentication page for existing customers to log into their accounts
4. **Home Page** - Main dashboard displaying popular food categories and chef's specials
5. **Orders Page** - Customer's order history and tracking interface

> **Note:** This is a frontend-only implementation. No backend, APIs, or authentication is implemented Stack Used.

---

## Tech

| Technology           | Purpose                                                         |
| -------------------- | --------------------------------------------------------------- |
| **React 18**         | Frontend framework for building the user interface              |
| **Vite**             | Build tool for fast development and optimized production builds |
| **React Router DOM** | Client-side routing for navigation between pages                |
| **CSS3**             | Styling with custom properties (CSS variables)                  |
| **ESLint**           | Code linting for maintaining code quality                       |

### Why These Technologies?

- **React** was chosen for its component-based architecture, allowing reusable UI components
- **Vite** provides lightning-fast development server and optimized production builds
- **React Router** enables seamless client-side navigation without page reloads
- **CSS Variables** allow for consistent theming and easy color scheme modifications

---

## Project Structure

```
digital-restaurant/
├── public/                  # Static assets
├── src/
│   ├── assets/
│   │   └── images/         # All image assets used in the application
│   ├── components/        # Reusable React components
│   │   ├── Cart/          # Orders page component
│   │   ├── Footer/        # Footer component
│   │   ├── Hero/          # Hero section for landing page
│   │   ├── HeroNavbar/    # Navbar for hero/landing page
│   │   ├── Login/         # Login form component
│   │   ├── Navbar/        # Main navigation bar (with hamburger menu)
│   │   ├── Scroll/        # Scroll utilities
│   │   └── Signup/        # Signup form component
│   ├── pages/             # Page-level components
│   │   ├── Home/          # Home page with categories and specials
│   │   └── Landing/       # Landing/hero page
│   ├── App.jsx            # Main app component with routing
│   ├── index.css          # Global styles and CSS variables
│   └── main.jsx           # Application entry point
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── package.json           # Dependencies and scripts
```

### Key Files and Their Purposes

| File                               | Purpose                                             |
| ---------------------------------- | --------------------------------------------------- |
| `src/App.jsx`                      | Main application component with route definitions   |
| `src/main.jsx`                     | Entry point that renders the React app              |
| `src/index.css`                    | Global styles, CSS variables, and reset styles      |
| `src/components/Navbar/Navbar.jsx` | Main navigation with responsive hamburger menu      |
| `src/pages/Home/Home.jsx`          | Home page displaying categories and chef's specials |
| `src/pages/Landing/Landing.jsx`    | Landing page with hero section                      |

---

## Design Interpretation

### Design Assumptions

Since this was implemented from a Figma design, the following assumptions were made:

1. **Color Scheme**: Used `--primary-orange` as the main brand color (#FF6B35 or similar), with dark text (#333333) for readability
2. **Typography**: Used clean sans-serif fonts for a modern look
3. **Layout**: Implemented responsive grid layouts for food categories and specials
4. **Navigation**:
   - Desktop: Horizontal link layout with logo on left, links centered, actions on right
   - Mobile: Hamburger menu slides in from the right

### Hamburger Menu Implementation

The main navbar includes a fully functional responsive hamburger menu:

- **Desktop (>768px)**: Horizontal navigation links with Login button visible
- **Mobile (≤768px)**:
  - Hamburger icon appears on the right side of the navbar
  - Clicking the hamburger slides in a menu from the right with smooth animation
  - All navigation links and Login button are accessible in the mobile menu
  - An overlay darkens the background when the menu is open
  - Menu closes automatically when a link is clicked
  - The hamburger icon animates into an "X" when the menu is open

### Animations & Transitions

- **Hamburger to X**: Smooth rotation transformation (0.3s ease)
- **Menu Slide-in**: Cubic-bezier transition for natural motion (0.4s)
- **Overlay Fade**: Semi-transparent backdrop that fades in/out
- **Link Hover**: Subtle padding and color transitions on hover

---

## Features Implemented

### 1. Landing Page (`/`)

- Hero section with welcome message and background image
- Search bar for food items
- "Get Started" and "Sign In" buttons

### 2. Sign Up Page (`/signup`)

- Registration form with name, email, and password fields
- Form validation (basic)
- Link to login page for existing users

### 3. Log In Page (`/login`)

- Login form with email and password fields
- Link to signup page for new users

### 4. Home Page (`/home`)

- Main navigation bar (with hamburger menu on mobile)
- Popular food categories grid
- Chef's specials section with pricing
- "Add to cart" buttons for each item
- Promotional banner section

### 5. Orders Page (`/orders`)

- Displays order history (mock data)
- Order status indicators
- Navigation bar (with hamburger menu on mobile)

### Navigation Note

The main navigation bar (with hamburger menu) appears on the **Home Page** and **Orders Page** only. The Landing Page, Sign Up Page, and Log In Page do not include this navigation bar - they instead feature the navigation links in their footer area. This design choice follows the Figma mockups and provides a clean, focused experience for new visitors.

---

## Limitations & Improvements

### Current Limitations

1. **No Backend** - All data is hardcoded/mocked; no real database connection
2. **No Authentication** - Login/Signup forms don't actually authenticate users
3. **No Cart Functionality** - "Add to cart" buttons don't persist data
4. **No API Integration** - All data is static/mocked within components
5. **Limited Form Validation** - Basic validation only

### Recommended Improvements

If given more time, the following improvements would enhance the application:

1. **Backend Integration**: Connect to a RESTful API or GraphQL for real data
2. **Authentication System**: Implement JWT or OAuth for user authentication
3. **State Management**: Add Redux, Zustand, or Context API for global state (cart, user session)
4. **Persistent Cart**: Use localStorage or database to persist cart items
5. **Payment Integration**: Add payment gateway (Stripe, Paystack) for order processing
6. **Admin Dashboard**: Create an admin panel for managing menu items and orders
7. **Search Functionality**: Implement actual search across menu items
8. **Order Tracking**: Add real-time order status updates
9. **Image Optimization**: Implement lazy loading and image optimization
10. **Accessibility**: Add ARIA labels and improve keyboard navigation

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd digital-restaurant

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

---

## Code Quality Standards

- **ESLint** is configured to maintain code quality
- Components follow React best practices (functional components, hooks)
- CSS uses custom properties for theming
- Responsive design follows mobile-first approach
- Clean, readable code with appropriate comments where necessary

---

## Credits

- **Client**: Mr. Chukwudi Okorie (Mr. Chuks), Chuks Kitchen
- **Development Agency**: TrueMinds Innovations Ltd
- **Frontend Developer**: Implementation based on Figma design by product team

---

## License

This project is proprietary and confidential. All rights reserved by TrueMinds Innovations Ltd.
