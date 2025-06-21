# Advance Image Generation App
Welcome to the Advance Image Generation App, a Next.js application designed to simulate image generation from user prompts. This project explores the power of React Hooks — particularly useState — to manage application state dynamically

Project Features
 React Hooks (useState) for state management

 Simulated image generation with user prompts

 Conditional rendering of components based on state

 Modular structure with reusable layout and component files

 Styled using Tailwind CSS

# Project structure

alx-project-0x05/
│
├── components/
│   │
│   ├── common/
│   │   └── ImageCard.tsx          # Component to display generated image and prompt
│   │
│   └── layouts/
│       ├── Header.tsx             # Navigation header
│       ├── Footer.tsx             # Footer section
│       └── Layout.tsx             # Page wrapper with header/footer
│
├── interfaces/
│   └── index.ts                   # TypeScript interfaces for props
│
├── pages/
│   ├── _app.tsx                   # Global wrapper with Layout component
│   └── index.tsx                  # Home page with image generation form
│
└── styles/
    └── globals.css               # Global styles (optional)
