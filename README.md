# Next.js Blog Application

A modern, feature-rich blogging platform built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. This application provides a comprehensive blogging experience with role-based dashboard systems, advanced routing, and responsive UI components powered by shadcn/ui.

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Authentication](#authentication)
- [Components](#components)
- [Styling](#styling)
- [Contributing](#contributing)

## ✨ Features

### Core Features
- **Blog Management**: Create, read, update, and manage blog posts
- **User Authentication**: Login and registration system with role-based access control
- **Dark Mode Support**: Theme switching with light/dark mode using next-themes
- **Responsive Design**: Mobile-friendly interface with adaptive layouts
- **Advanced Routing**: Next.js 16 App Router with nested routing, parallel routes, and layout groups
- **Type-Safe**: Full TypeScript support with Zod validation

### User Roles & Dashboards
- **Admin Dashboard**: Admin-specific features and controls (`@admin` parallel route)
- **User Dashboard**: User-specific features including:
  - Dashboard overview with analytics
  - Create new blog posts
  - View blog post history
  - Pagination controls for managing content
- **Responsive Layouts**: Different layouts for different user roles and pages

### Pages & Sections
- **Home Page**: Featured posts showcase and recent blog listings
- **Blog Listing**: Browse all available blog posts with featured posts section
- **About Page**: Learn more about the platform
- **Contact Page**: Contact information with branch details and layout variations
- **Authentication Pages**: Login and registration pages
- **Error Handling**: Custom error pages and loading states with skeleton loaders

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 16.1.1** - React framework with app router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Components & Styling
- **shadcn/ui** - High-quality React components
- **Radix UI** - Primitive components for accessibility
  - Accordion, Aspect Ratio, Dialog, Dropdown Menu, Label, Navigation Menu, Separator, Slot, Tooltip
- **Lucide React 0.562.0** - Icon library
- **class-variance-authority** - CSS class utilities
- **tailwind-merge** - Merge Tailwind CSS classes

### Authentication & Forms
- **better-auth 1.4.16** - Authentication library
- **TanStack React Form 1.27.7** - Form state management
- **Zod 4.3.6** - TypeScript-first schema validation

### Utilities
- **next-themes 0.4.6** - Theme management
- **Sonner 2.0.7** - Toast notifications
- **Sharp 0.34.5** - Image optimization
- **clsx 2.1.1** - Class name utility

### Development Tools
- **ESLint 9** - Code linting
- **Tailwind CSS PostCSS 4** - CSS processing

## 📁 Project Structure

```
src/
├── actions/                    # Server actions
│   └── post.action.ts         # Post-related server actions
│
├── app/                        # Next.js App Router
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   ├── not-found.tsx          # 404 error page
│   │
│   ├── (commonLayout)/        # Layout group for common pages
│   │   ├── layout.tsx         # Common layout wrapper
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   │   ├── error.tsx      # Error boundary
│   │   │   ├── loading.tsx    # Loading state
│   │   │   └── page.tsx
│   │   ├── blogs/             # Blog listing
│   │   │   ├── page.tsx       # All blogs page
│   │   │   └── [id]/          # Dynamic blog post page
│   │   │       └── page.tsx
│   │   ├── login/             # Login page
│   │   └── signup/            # Registration page
│   │
│   ├── (dashboardLayout)/     # Dashboard layout with parallel routes
│   │   ├── layout.tsx         # Dashboard wrapper layout
│   │   ├── default.tsx        # Default fallback
│   │   │
│   │   ├── @admin/            # Admin slot (parallel route)
│   │   │   ├── default.tsx
│   │   │   └── admin-dashboard/
│   │   │       └── page.tsx   # Admin dashboard
│   │   │
│   │   └── @user/             # User slot (parallel route)
│   │       ├── default.tsx
│   │       └── dashboard/
│   │           ├── page.tsx   # User dashboard
│   │           ├── create-blog/
│   │           │   └── page.tsx  # Create blog post
│   │           └── history/
│   │               └── page.tsx  # Blog post history
│   │
│   ├── (practice)/            # Practice layout with marketing & sales slots
│   │   ├── layout.tsx
│   │   ├── default.tsx
│   │   │
│   │   ├── @marketingSlot/    # Marketing parallel route
│   │   │   ├── default.tsx
│   │   │   └── marketing/
│   │   │       ├── page.tsx
│   │   │       └── settings/
│   │   │           └── page.tsx
│   │   │
│   │   ├── @salesSlot/        # Sales parallel route
│   │   │   ├── default.tsx
│   │   │   └── sales/
│   │   │       └── page.tsx
│   │   │
│   │   ├── development/
│   │   └── testing/
│   │
│   └── contact/               # Contact section
│       ├── layout.tsx
│       ├── page.tsx           # Contact page
│       └── branch/            # Branch page
│           └── page.tsx
│
├── components/                # Reusable React components
│   ├── layouts/              # Layout components
│   │   ├── Navbar.tsx        # Navigation bar
│   │   ├── app-sidebar.tsx   # Application sidebar
│   │   ├── ModeToggle.tsx    # Dark/light theme toggle
│   │   ├── search-form.tsx   # Search input form
│   │   └── version-switcher.tsx
│   │
│   ├── modules/              # Feature-specific components
│   │   ├── authentication/
│   │   │   ├── login-form.tsx      # Login form component
│   │   │   └── signup-form.tsx     # Signup form component
│   │   │
│   │   ├── homepage/
│   │   │   └── PostCard.tsx        # Blog post card display
│   │   │
│   │   └── user/
│   │       ├── createBlog/
│   │       │   ├── CreateBlogFormClient.tsx   # Client-side form
│   │       │   └── createBlogFormServer.tsx   # Server-side form
│   │       └── history/
│   │           └── HistoryTable.tsx           # History table display
│   │
│   └── ui/                   # shadcn/ui components
│       ├── accordion.tsx
│       ├── aspect-ratio.tsx
│       ├── badge.tsx
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dropdown-menu.tsx
│       ├── field.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── navigation-menu.tsx
│       ├── pagination.tsx
│       ├── pagination-controls.tsx  # Custom pagination controls
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       ├── sonner.tsx
│       ├── table.tsx
│       ├── textarea.tsx
│       └── tooltip.tsx
│
├── constance/                # Constants and enums
│   └── role.ts              # User role definitions
│
├── hooks/                   # Custom React hooks
│   └── use-mobile.ts        # Mobile detection hook
│
├── lib/                     # Utility libraries
│   ├── auth-client.ts       # Client-side auth utilities
│   └── utils.ts             # Common utility functions
│
├── providers/               # React context providers
│   └── ThemeProvider.tsx    # Theme provider setup
│
├── routes/                  # Route definitions
│   ├── adminRoute.ts        # Admin routes
│   └── userRoute.ts         # User routes
│
├── services/                # API service layer
│   ├── post.service.ts      # Blog post API calls
│   └── user.service.ts      # User API calls
│
├── types/                   # TypeScript type definitions
│   ├── index.ts            # Exported types
│   ├── post.type.ts        # Post-related types
│   └── route.type.ts       # Route-related types
│
└── env.ts                   # Environment variable configuration
```

## 🚀 Installation

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn package manager
- Git

### Clone & Setup
```bash
# Clone the repository
git clone <repository-url>
cd nextjs-app

# Install dependencies
npm install
# or
yarn install

# Create .env.local file for environment variables
cp .env.example .env.local
```

## 🏃 Getting Started

### Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

### Production Build
```bash
npm run build
npm start
# or
yarn build
yarn start
```

### Linting
```bash
npm run lint
# or
yarn lint
```

## ⚙️ Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Authentication (if using external auth)
NEXT_PUBLIC_AUTH_URL=http://localhost:3000

# Database (if applicable)
DATABASE_URL=postgresql://user:password@localhost:5432/blog_db
```

### Tailwind CSS Configuration
Tailwind CSS 4 is configured via `postcss.config.mjs`. Customize in `globals.css`.

### Theme Configuration
Dark/light theme switching is enabled via `next-themes`. Configure in [providers/ThemeProvider.tsx](src/providers/ThemeProvider.tsx).

## 📝 Usage

### Creating a Blog Post
1. Navigate to Dashboard → Create Blog
2. Fill in the title, content, and tags
3. Click "Publish" to create the post
4. View all your posts in Dashboard → History

### User Authentication
- **Login**: Visit `/login`
- **Register**: Visit `/signup`
- Role-based access control restricts admin features to authorized users

### Navigation Structure
- **Home**: `/` (Featured posts and recent blog listings)
- **Blog Listing**: `/blogs`
- **Blog Detail**: `/blogs/[id]`
- **About**: `/about`
- **Contact**: `/contact`
- **User Dashboard**: `/dashboard` (requires authentication)
- **Create Blog**: `/dashboard/create-blog`
- **Post History**: `/dashboard/history`
- **Admin Dashboard**: `/admin-dashboard` (admin only)

## 🔌 API Integration

The application uses `postService` and `userService` for API calls:

### Post Service
```typescript
// Get posts with pagination
await postService.getPostService({
  page: "1",
  limit: "10",
  isFeatured: true,
  search: "query"
});

// Service located in src/services/post.service.ts
```

### User Service
```typescript
// User-related operations
// Service located in src/services/user.service.ts
```

## 🔐 Authentication

- Uses `better-auth` for authentication
- Client-side auth utilities in [lib/auth-client.ts](src/lib/auth-client.ts)
- Role-based access control with Admin and User roles
- Protected routes via middleware

## 🎨 Components

### UI Components
All components are from shadcn/ui and fully customizable. Located in [src/components/ui/](src/components/ui/):
- Button, Input, Textarea, Label
- Card, Badge, Separator
- Table, Pagination, Skeleton
- Dialog, Dropdown Menu, Tooltip
- And more...

### Custom Components
- **PostCard**: Display individual blog post preview
- **HistoryTable**: Paginated table of user's blog posts
- **CreateBlogFormClient/Server**: Blog creation forms
- **Navbar**: Navigation header
- **ModeToggle**: Theme switcher

## 🎯 Styling

- **Tailwind CSS 4** for utility-first styling
- **CSS Modules** for component-scoped styles
- **Dark mode** support with next-themes
- Responsive design with mobile-first approach
- Animation support via tailwind

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.1.1 | React framework |
| react | 19.2.3 | UI library |
| typescript | 5 | Type safety |
| tailwindcss | 4 | CSS framework |
| zod | 4.3.6 | Schema validation |
| better-auth | 1.4.16 | Authentication |
| next-themes | 0.4.6 | Theme management |
| sonner | 2.0.7 | Toast notifications |
| lucide-react | 0.562.0 | Icons |

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👨‍💻 Support

For issues and questions, please contact the development team or check the project documentation.

---

**Last Updated**: January 2026
**Next.js Version**: 16.1.1
**React Version**: 19.2.3
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
