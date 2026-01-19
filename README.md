# Next.js Blog Application

A modern, feature-rich blogging platform built with Next.js, React, TypeScript, and Tailwind CSS. This application provides a comprehensive blogging experience with role-based dashboard systems, advanced routing, and responsive UI components.

##  Features

### Core Features
- **Blog Management**: Create, read, and manage blog posts
- **User Authentication**: Login and registration system
- **Dark Mode Support**: Theme switching with light/dark mode
- **Responsive Design**: Mobile-friendly interface with adaptive layouts
- **Advanced Routing**: Nested routing with parallel routes and layout groups

### User Roles & Dashboards
- **Admin Dashboard**: Admin-specific features and controls
- **User Dashboard**: User-specific features and analytics
- **Analytics**: View dashboard analytics with monthly and weekly data
- **Write Blog**: Dedicated section for creating new blog posts

### Pages & Sections
- **Blog Listing**: Browse all available blog posts
- **About Page**: Learn more about the platform
- **Contact Page**: Contact information with branch details
- **Error Handling**: Custom error pages and loading states

##  Project Structure

\\\
src/
 app/                           # Next.js app directory
    (commonLayout)/            # Common layout group
       about/                 # About page
       blogs/                 # Blog listing page
       login/                 # Login page
       register/              # Registration page
    (dashboardLayout)/         # Dashboard layout with parallel routes
       @admin/                # Admin dashboard slot
       @user/                 # User dashboard slot
       dashboard/             # Dashboard with analytics
    (practice)/                # Practice layout with marketing & sales slots
       @marketingSlot/
       @salesSlot/
       development/
    contact/                   # Contact section
    layout.tsx                 # Root layout
 components/
    layouts/                   # Layout components
       Navbar.tsx            # Navigation bar
       app-sidebar.tsx       # Application sidebar
       ModeToggle.tsx        # Theme toggle component
       search-form.tsx       # Search functionality
       version-switcher.tsx  # Version selector
    ui/                        # Reusable UI components
        accordion.tsx
        breadcrumb.tsx
        button.tsx
        dropdown-menu.tsx
        input.tsx
        label.tsx
        navigation-menu.tsx
        separator.tsx
        sheet.tsx
        sidebar.tsx
        skeleton.tsx
        tooltip.tsx
 hooks/                         # Custom React hooks
    use-mobile.ts             # Mobile detection hook
 lib/                           # Utility functions
    utils.ts                  # Common utilities
 providers/                     # React providers
    ThemeProvider.tsx         # Theme context provider
 routes/                        # Route definitions
    adminRoute.ts            # Admin route configuration
    userRoute.ts             # User route configuration
 types/                         # TypeScript type definitions
     index.ts
     route.type.ts
\\\

##  Tech Stack

### Core Framework
- **Next.js 16.1.1**: React framework with App Router
- **React 19.2.3**: UI library
- **TypeScript 5**: Type-safe development

### Styling & UI
- **Tailwind CSS 4**: Utility-first CSS framework
- **Radix UI Components**: Accessible UI components library
- **Lucide React**: Beautiful icon library
- **class-variance-authority**: CSS class composition
- **tailwind-merge**: Merge Tailwind classes intelligently

### Theming & Utilities
- **next-themes**: Light/dark mode support
- **clsx**: Conditional className utility

### Development Tools
- **ESLint 9**: Code quality linting
- **PostCSS**: CSS transformation

##  Dependencies

\\\json
{
  "core": [
    "next@16.1.1",
    "react@19.2.3",
    "react-dom@19.2.3"
  ],
  "ui": [
    "@radix-ui/react-accordion@1.2.12",
    "@radix-ui/react-dialog@1.1.15",
    "@radix-ui/react-dropdown-menu@2.1.16",
    "@radix-ui/react-label@2.1.8",
    "@radix-ui/react-navigation-menu@1.2.14",
    "@radix-ui/react-separator@1.1.8",
    "@radix-ui/react-slot@1.2.4",
    "@radix-ui/react-tooltip@1.2.8",
    "lucide-react@0.562.0"
  ],
  "styling": [
    "tailwindcss@4",
    "@tailwindcss/postcss@4",
    "class-variance-authority@0.7.1",
    "clsx@2.1.1",
    "tailwind-merge@3.4.0"
  ],
  "theming": [
    "next-themes@0.4.6"
  ]
}
\\\

##  Getting Started

### Prerequisites
- Node.js 18+ or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
\\\ash
git clone <repository-url>
cd nextjs-app
\\\

2. Install dependencies:
\\\ash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
\\\

### Development Server

Run the development server:

\\\ash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\\\

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The app will auto-reload as you make changes to your code.

### Building for Production

Build the application for production:

\\\ash
npm run build
# or
yarn build
\\\

### Running Production Build

Start the production server:

\\\ash
npm start
# or
yarn start
\\\

### Linting

Check code quality with ESLint:

\\\ash
npm run lint
\\\

##  Key Features & Usage

### Layout Groups
This project uses Next.js layout groups (directories with parentheses) to organize pages without affecting URL structure:
- \(commonLayout)\ - Shared layout for public pages
- \(dashboardLayout)\ - Dashboard-specific layout with role-based access
- \(practice)\ - Practice area with parallel routes

### Parallel Routes
The dashboard uses parallel routes (\@admin\, \@user\) to display multiple segments simultaneously:
- Admin can access admin-specific features
- Users can access user-specific features
- Both share the dashboard layout

### Theme Support
Built-in dark/light mode switching using \
ext-themes\:
- Automatic theme detection
- Persistent theme preference
- Smooth theme transitions

### Reusable Components
Extensive library of Radix UI components with Tailwind CSS styling:
- Navigation components (Navbar, Sidebar, Navigation Menu)
- Form components (Input, Label)
- Data display (Accordion, Breadcrumb, Separator)
- Feedback (Tooltip, Skeleton loaders)

##  Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Mobile detection hook (\use-mobile\)
- Adaptive layouts for different screen sizes
- Responsive navigation with collapsible sidebar

##  Customization

### Colors & Styling
Modify Tailwind CSS configuration in \	ailwind.config.ts\ for custom colors and themes.

### Components
Customize UI components in \src/components/ui/\ to match your design system.

### Theme Provider
Configure theme settings in \src/providers/ThemeProvider.tsx\.

##  Learning Resources

- [Next.js Documentation](https://nextjs.org/docs) - Comprehensive Next.js guide
- [React Documentation](https://react.dev) - React concepts and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/docs) - Accessible component library
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript reference

##  Configuration Files

- \
ext.config.ts\ - Next.js configuration
- \	sconfig.json\ - TypeScript configuration
- \	ailwind.config.ts\ - Tailwind CSS customization
- \postcss.config.mjs\ - PostCSS processing
- \eslint.config.mjs\ - ESLint rules
- \components.json\ - Shadcn/ui configuration

##  Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js application is using [Vercel Platform](https://vercel.com/new?utm_source=nextjs-blog-app) by the creators of Next.js.

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure build settings
4. Deploy with one click

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for detailed deployment options.

### Other Deployment Options
- **Netlify**: Connect your Git repository
- **Railway**: Deploy with Railway for simplicity
- **Self-hosted**: Build and run on your own server

##  License

This project is open source and available under the MIT License.

##  Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

##  Support

For questions or issues, please open an issue in the repository or contact the development team.

---

**Developer**: Md. Al-Amin

**Happy Blogging! **
